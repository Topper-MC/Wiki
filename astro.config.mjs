import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGitHubAlerts from 'starlight-github-alerts'

import vue from '@astrojs/vue';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
	integrations: [
        vue(),
		starlight({
			title: 'Topper',
            favicon: 'src/assets/topper/logo.svg',
            plugins: [
                starlightGitHubAlerts(),
                starlightUtils({
                    multiSidebar: {
                        switcherStyle: "dropdown"
                    },
                    navLinks: {
                        leading: {
                            useSidebarLabelled: "leadingNavLinks"
                        }
                    }
                })
            ],
            logo: {
                src: 'src/assets/topper/logo.svg',
            },
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
			sidebar: [
                {
                    label: 'leadingNavLinks',
                    items: [
                        "topper",
                        "timedtopper",
                        "grouptopper",
                        "cachy"
                    ]
                },
                {
                    label: 'Topper',
                    items: [
                        'topper/quickstart',
                        'topper/commands',
                        'topper/config',
                        'topper/faq',
                        'topper/query',
                        {
                            label: 'Value Provider',
                            items: [
                                'topper/provider',
                                'topper/provider/statistic',
                                'topper/provider/placeholder',
                                'topper/provider/miniplaceholder',
                            ]
                        },
                        {
                            label: 'Hook',
                            items: [
                                'topper/hook',
                                'topper/hook/placeholderapi',
                                'topper/hook/miniplaceholders',
                                'topper/hook/luckperms',
                                'topper/hook/lastloginapi',
                            ]
                        },
                        {
                            label: 'Extra',
                            items: [
                                'topper/extra',
                                'topper/extra/provider',
                                'topper/extra/hologram',
                                'topper/extra/block',
                                'topper/extra/npc',
                                'topper/extra/playtime',
                                'topper/extra/value_display',
                                'topper/extra/migrate_v2',
                            ]
                        }
                    ],
                },
                {
                    label: 'TimedTopper',
                    items: [
                        'timedtopper/config',
                        {
                            label: 'Holder',
                            items: [
                                'timedtopper/holder',
                                'timedtopper/holder/link',
                                'timedtopper/holder/time',
                                'timedtopper/holder/reward',
                            ]
                        },
                        'timedtopper/query',
                        {
                            label: 'Hook',
                            items: [
                                'timedtopper/hook',
                                'timedtopper/hook/luckperms',
                                'timedtopper/hook/placeholderapi',
                            ]
                        },
                        'timedtopper/api',
                    ]
                },
                {
                    label: 'GroupTopper',
                    items: [
                        'grouptopper/config',
                        {
                            label: 'Holder',
                            items: [
                                'grouptopper/holder',
                                'grouptopper/holder/link',
                                {
                                    label: 'Set up Group settings',
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
                                    ]
                                },
                                'grouptopper/holder/mode',
                            ]
                        },
                        'grouptopper/query',
                        {
                            label: 'Hook',
                            items: [
                                'grouptopper/hook',
                                'grouptopper/hook/luckperms',
                                'grouptopper/hook/placeholderapi',
                            ]
                        }
                    ]
                },
                {
                    label: 'Cachy',
                    items: [
                        'cachy/config',
                        'cachy/query',
                        {
                            label: 'Hook',
                            items: [
                                'cachy/hook',
                                'cachy/hook/placeholderapi',
                            ]
                        }
                    ]
                }
			],
		}),
	],
});
