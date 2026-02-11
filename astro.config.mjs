import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGitHubAlerts from 'starlight-github-alerts'

import vue from '@astrojs/vue';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import starlightCoolerCredit from "starlight-cooler-credit";

// Dynamically load translations
const docsDir = './src/content/docs';
const translations = {};
const starlightLocales = {};
const siteTitle = {};

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
        
        const title = content.site?.title || 'Topper';

        if (locale === 'en') {
            // Map English to root locale
            starlightLocales.root = {
                 label: getLanguageName(locale),
                 lang: locale
            };
            siteTitle[locale] = title;
        } else {
            starlightLocales[locale] = {
                label: getLanguageName(locale),
                lang: locale
            };
            siteTitle[locale] = title;
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

// Ensure root title falls back to Topper if not set
if (!siteTitle.en) {
    siteTitle.en = 'Topper';
}

// Helper to read frontmatter title from an index page
function getTitle(slug, fallback) {
    const extensions = ['mdx', 'md'];
    for (const ext of extensions) {
        const filePath = path.join(docsDir, slug, `index.${ext}`);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
            if (fmMatch) {
                try {
                    const frontmatter = yaml.load(fmMatch[1]);
                    if (frontmatter?.title) return frontmatter.title;
                } catch { /* ignore parse errors */ }
            }
        }
    }
    return fallback;
}

// Helper to get translated titles from locale subdirectories
function getTitleTranslations(slug) {
    const result = {};
    // Find all locale directories that have i18n.json (i.e. are registered locales)
    Object.keys(translations).forEach(lang => {
        if (lang === 'en') return; // Skip default locale
        const title = getTitle(path.join(lang, slug));
        if (title) {
            result[lang] = title;
        }
    });
    return result;
}

function getSidebar() {
    return [
        {
            label: getTitle('topper', 'Topper'),
            items: [
                'topper/quickstart',
                'topper/commands',
                'topper/config',
                'topper/faq',
                'topper/query',
                {
                    label: getTitle('topper/provider', 'Value Provider'),
                    items: [
                        'topper/provider/statistic',
                        'topper/provider/placeholder',
                        'topper/provider/miniplaceholder',
                    ],
                    translations: getTitleTranslations('topper/provider')
                },
                {
                    label: getTitle('topper/hook', 'Hook'),
                    items: [
                        'topper/hook/placeholderapi',
                        'topper/hook/miniplaceholders',
                        'topper/hook/luckperms',
                        'topper/hook/lastloginapi',
                    ],
                    translations: getTitleTranslations('topper/hook')
                },
                {
                    label: getTitle('topper/extra', 'Extra'),
                    items: [
                        'topper/extra/provider',
                        'topper/extra/hologram',
                        'topper/extra/block',
                        'topper/extra/npc',
                        'topper/extra/playtime',
                        'topper/extra/value_display',
                        'topper/extra/migrate_v2',
                    ],
                    translations: getTitleTranslations('topper/extra')
                }
            ],
            translations: getTitleTranslations('topper')
        },
        {
            label: getTitle('timedtopper', 'TimedTopper'),
            items: [
                'timedtopper/config',
                {
                    label: getTitle('timedtopper/holder', 'Holder'),
                    items: [
                        'timedtopper/holder/link',
                        'timedtopper/holder/time',
                        'timedtopper/holder/reward',
                    ],
                    translations: getTitleTranslations('timedtopper/holder')
                },
                'timedtopper/query',
                {
                    label: getTitle('timedtopper/hook', 'Hook'),
                    items: [
                        'timedtopper/hook/luckperms',
                        'timedtopper/hook/placeholderapi',
                    ],
                    translations: getTitleTranslations('timedtopper/hook')
                },
                'timedtopper/api',
            ],
            translations: getTitleTranslations('timedtopper')
        },
        {
            label: getTitle('grouptopper', 'GroupTopper'),
            items: [
                'grouptopper/config',
                {
                    label: getTitle('grouptopper/holder', 'Holder'),
                    items: [
                        'grouptopper/holder/link',
                        'grouptopper/holder/group',

                        'grouptopper/holder/mode',
                    ],
                    translations: getTitleTranslations('grouptopper/holder')
                },
                'grouptopper/query',
                {
                    label: getTitle('grouptopper/hook', 'Hook'),
                    items: [
                        'grouptopper/hook/luckperms',
                        'grouptopper/hook/placeholderapi',
                    ],
                    translations: getTitleTranslations('grouptopper/hook')
                },
            ],
            translations: getTitleTranslations('grouptopper')
        },
        {
            label: getTitle('cachy', 'Cachy'),
            items: [
                'cachy/config',
                'cachy/query',
                {
                    label: getTitle('cachy/hook', 'Hook'),
                    items: [
                        'cachy/hook/placeholderapi',
                    ],
                    translations: getTitleTranslations('cachy/hook')
                }
            ],
            translations: getTitleTranslations('cachy')
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
			title: siteTitle,
            favicon: 'src/assets/topper/logo.svg',
            editLink: {
                baseUrl: "https://github.com/Topper-MC/Wiki/edit/main/"
            },
            plugins: [
                starlightGitHubAlerts(),
                starlightUtils({
                    multiSidebar: {
                        switcherStyle: "dropdown"
                    }
                }),
                starlightCoolerCredit({
                    credit: {
                        title: "Help translating this page",
                        href: "https://crowdin.com/project/topper-wiki/",
                        description: "You can help by clicking here and going to the Crowdin project."
                    },
                    showImage: false
                })
            ],
            logo: {
                src: 'src/assets/topper/logo.svg'
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
			sidebar: getSidebar(),
		}),
	],
});
