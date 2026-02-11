import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGitHubAlerts from 'starlight-github-alerts'

import vue from '@astrojs/vue';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import fs from 'node:fs';
import path from 'node:path';

// Dynamically load translations
const docsDir = './src/content/docs';
const translations = {};
const starlightLocales = {};

// Helper to get native language name
function getLanguageName(locale) {
    try {
        const name = new Intl.DisplayNames([locale], { type: 'language' }).of(locale);
        return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
    } catch {
        return locale;
    }
}

function processLocale(locale, filePath) {
    try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        translations[locale] = content;
        
        if (locale === 'en') {
            // Map English to root locale
            starlightLocales.root = {
                 label: getLanguageName(locale),
                 lang: locale
            };
        } else {
            starlightLocales[locale] = {
                label: getLanguageName(locale),
                lang: locale
            };
        }
    } catch (e) {
        console.error(`Failed to load locale ${locale}:`, e);
    }
}

if (fs.existsSync(docsDir)) {
    // Check for root locale (en)
    const rootPath = path.join(docsDir, 'i18n.json');
    if (fs.existsSync(rootPath)) {
        processLocale('en', rootPath);
    }

    // Check for sub-locales
    fs.readdirSync(docsDir, { withFileTypes: true }).forEach(dirent => {
        if (dirent.isDirectory()) {
            const locale = dirent.name;
            const localePath = path.join(docsDir, locale, 'i18n.json');
            if (fs.existsSync(localePath)) {
                processLocale(locale, localePath);
            }
        }
    });
}

// Helper to get sidebar group translations for all non-default locales
function getSidebarTranslations(key) {
    const result = {};
    Object.keys(translations).forEach(lang => {
        if (lang === 'en') return; // Skip default locale (root)
        if (translations[lang]?.sidebar?.[key]) {
            result[lang] = translations[lang].sidebar[key];
        }
    });
    return result;
}

function getSidebar(locale) {
    // Fallback to empty object if locale not found
    const t = translations[locale]?.sidebar || {};
    
    return [
        {
            label: t.topper || 'Topper',
            items: [
                'topper/quickstart',
                'topper/commands',
                'topper/config',
                'topper/faq',
                'topper/query',
                {
                    label: t.valueProvider || 'Value Provider',
                    items: [
                        'topper/provider',
                        'topper/provider/statistic',
                        'topper/provider/placeholder',
                        'topper/provider/miniplaceholder',
                    ],
                    translations: getSidebarTranslations('valueProvider')
                },
                {
                    label: t.hook || 'Hook',
                    items: [
                        'topper/hook',
                        'topper/hook/placeholderapi',
                        'topper/hook/miniplaceholders',
                        'topper/hook/luckperms',
                        'topper/hook/lastloginapi',
                    ],
                    translations: getSidebarTranslations('hook')
                },
                {
                    label: t.extra || 'Extra',
                    items: [
                        'topper/extra',
                        'topper/extra/provider',
                        'topper/extra/hologram',
                        'topper/extra/block',
                        'topper/extra/npc',
                        'topper/extra/playtime',
                        'topper/extra/value_display',
                        'topper/extra/migrate_v2',
                    ],
                    translations: getSidebarTranslations('extra')
                }
            ],
            translations: getSidebarTranslations('topper')
        },
        {
            label: t.timedTopper || 'TimedTopper',
            items: [
                'timedtopper/config',
                {
                    label: t.holder || 'Holder',
                    items: [
                        'timedtopper/holder',
                        'timedtopper/holder/link',
                        'timedtopper/holder/time',
                        'timedtopper/holder/reward',
                    ],
                    translations: getSidebarTranslations('holder')
                },
                'timedtopper/query',
                {
                    label: t.hook || 'Hook',
                    items: [
                        'timedtopper/hook',
                        'timedtopper/hook/luckperms',
                        'timedtopper/hook/placeholderapi',
                    ],
                    translations: getSidebarTranslations('hook')
                },
                'timedtopper/api',
            ],
            translations: getSidebarTranslations('timedTopper')
        },
        {
            label: t.groupTopper || 'GroupTopper',
            items: [
                'grouptopper/config',
                {
                    label: t.holder || 'Holder',
                    items: [
                        'grouptopper/holder',
                        'grouptopper/holder/link',
                        {
                            label: t.setUpGroupSettings || 'Set up Group settings',
                            items: [
                                'grouptopper/holder/group',
                                'grouptopper/holder/group/bentobox',
                                'grouptopper/holder/group/betterteams',
                                'grouptopper/holder/group/factionsuuid',
                                'grouptopper/holder/group/factionsbridge',
                                'grouptopper/holder/group/husktowns',
                                'grouptopper/holder/group/kingdomsx',
                                'grouptopper/holder/group/lands',
                                'grouptopper/holder/group/mcmmo',
                                'grouptopper/holder/group/parties',
                                'grouptopper/holder/group/placeholderapi',
                                'grouptopper/holder/group/simpleclans',
                                'grouptopper/holder/group/superiorskyblock',
                                'grouptopper/holder/group/towny',
                            ],
                            translations: getSidebarTranslations('setUpGroupSettings')
                        },
                        'grouptopper/holder/mode',
                    ],
                    translations: getSidebarTranslations('holder')
                },
                'grouptopper/query',
                {
                    label: t.hook || 'Hook',
                    items: [
                        'grouptopper/hook',
                        'grouptopper/hook/luckperms',
                        'grouptopper/hook/placeholderapi',
                    ],
                    translations: getSidebarTranslations('hook')
                }
            ],
            translations: getSidebarTranslations('groupTopper')
        },
        {
            label: t.cachy || 'Cachy',
            items: [
                'cachy/config',
                'cachy/query',
                {
                    label: t.hook || 'Hook',
                    items: [
                        'cachy/hook',
                        'cachy/hook/placeholderapi',
                    ],
                    translations: getSidebarTranslations('hook')
                }
            ],
            translations: getSidebarTranslations('cachy')
        }
    ];
}

// https://astro.build/config
export default defineConfig({
    site: 'https://topper-mc.github.io',
    base: '/Wiki',
	integrations: [
        vue(),
		starlight({
			title: translations['en']?.site?.title || 'Topper',
            favicon: 'src/assets/topper/logo.svg',
            plugins: [
                starlightGitHubAlerts(),
                starlightUtils({
                    multiSidebar: {
                        switcherStyle: "dropdown"
                    }
                })
            ],
            logo: {
                src: 'src/assets/topper/logo.svg',
                replacesTitle: true
            },
            defaultLocale: 'root',
            locales: starlightLocales,
			social: [
				{
					label: 'GitHub',
					href: 'https://github.com/Topper-MC',
                    icon: 'github',
				},
			],
            customCss: [
                // './src/styles/custom.css', // If we have one
            ],
            components: {
                Head: "./src/components/starlight/Head.astro",
            },
			sidebar: getSidebar('en'),
		}),
	],
});
