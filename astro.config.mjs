import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGitHubAlerts from 'starlight-github-alerts'

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	integrations: [
        vue(),
		starlight({
			title: 'Topper',
            plugins: [
                starlightGitHubAlerts()
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
                    label: 'Topper',
                    items: [
                        { label: 'Introduction', link: '/topper/' }, // Main page of Topper
                        { label: 'Quick Start', link: '/topper/quickstart/' },
                        { label: 'Commands & Permissions', link: '/topper/commands/' },
                        { label: 'Config', link: '/topper/config/' },
                        { label: 'FAQ', link: '/topper/faq/' },
                        { label: 'Query', link: '/topper/query/' },
                        {
                            label: 'Value Provider',
                            items: [
                                { label: 'Introduction', link: '/topper/provider/' },
                                { label: 'Statistic', link: '/topper/provider/statistic/' },
                                { label: 'Placeholder', link: '/topper/provider/placeholder/' },
                                { label: 'MiniPlaceholder', link: '/topper/provider/miniplaceholder/' },
                            ]
                        },
                        {
                            label: 'Hook',
                            items: [
                                { label: 'Introduction', link: '/topper/hook/' },
                                { label: 'PlaceholderAPI', link: '/topper/hook/placeholderapi/' },
                                { label: 'MiniPlaceholders', link: '/topper/hook/miniplaceholders/' },
                                { label: 'LuckPerms', link: '/topper/hook/luckperms/' },
                                { label: 'LastLoginAPI', link: '/topper/hook/lastloginapi/' },
                            ]
                        },
                        {
                            label: 'Extra',
                            items: [
                                { label: 'Introduction', link: '/topper/extra/' },
                                { label: 'Customize Value Provider', link: '/topper/extra/provider/' },
                                { label: 'Create a Hologram', link: '/topper/extra/hologram/' },
                                { label: 'Create a Top Block', link: '/topper/extra/block/' },
                                { label: 'Create an NPC', link: '/topper/extra/npc/' },
                                { label: 'Playtime Leaderboard', link: '/topper/extra/playtime/' },
                                { label: 'Value Display', link: '/topper/extra/value_display/' },
                                { label: 'Migrate from 2.X', link: '/topper/extra/migrate_v2/' },
                            ]
                        }
                    ],
                },
                {
                    label: 'TimedTopper',
                    items: [
                        { label: 'Introduction', link: '/timedtopper/' },
                        { label: 'Config', link: '/timedtopper/config/' },
                        {
                            label: 'Holder',
                            items: [
                                { label: 'Introduction', link: '/timedtopper/holder/' },
                                { label: 'Link a Top Holder', link: '/timedtopper/holder/link/' },
                                { label: 'Set time interval', link: '/timedtopper/holder/time/' },
                                { label: 'Set up Reward', link: '/timedtopper/holder/reward/' },
                            ]
                        },
                        { label: 'Query', link: '/timedtopper/query/' },
                        {
                            label: 'Hook',
                            items: [
                                { label: 'Introduction', link: '/timedtopper/hook/' },
                                { label: 'LuckPerms', link: '/timedtopper/hook/luckperms/' },
                                { label: 'PlaceholderAPI', link: '/timedtopper/hook/placeholderapi/' },
                            ]
                        },
                        { label: 'API', link: '/timedtopper/api/' },
                    ]
                },
                {
                    label: 'GroupTopper',
                    items: [
                        { label: 'Introduction', link: '/grouptopper/' },
                        { label: 'Config', link: '/grouptopper/config/' },
                        {
                            label: 'Holder',
                            items: [
                                { label: 'Introduction', link: '/grouptopper/holder/' },
                                { label: 'Link a Top Holder', link: '/grouptopper/holder/link/' },
                                {
                                    label: 'Set up Group settings',
                                    items: [
                                        { label: 'Introduction', link: '/grouptopper/holder/group/' },
                                        { label: 'BentoBox', link: '/grouptopper/holder/group/bentobox/' },
                                        { label: 'BetterTeams', link: '/grouptopper/holder/group/betterteams/' },
                                        { label: 'FactionsUUID', link: '/grouptopper/holder/group/factionsuuid/' },
                                        { label: 'FactionsBridge', link: '/grouptopper/holder/group/factionsbridge/' },
                                        { label: 'HuskTowns', link: '/grouptopper/holder/group/husktowns/' },
                                        { label: 'KingdomsX', link: '/grouptopper/holder/group/kingdomsx/' },
                                        { label: 'Lands', link: '/grouptopper/holder/group/lands/' },
                                        { label: 'McMMO', link: '/grouptopper/holder/group/mcmmo/' },
                                        { label: 'Parties', link: '/grouptopper/holder/group/parties/' },
                                        { label: 'PlaceholderAPI', link: '/grouptopper/holder/group/placeholderapi/' },
                                        { label: 'SimpleClans', link: '/grouptopper/holder/group/simpleclans/' },
                                        { label: 'SuperiorSkyblock', link: '/grouptopper/holder/group/superiorskyblock/' },
                                        { label: 'Towny', link: '/grouptopper/holder/group/towny/' },
                                    ]
                                },
                                { label: 'Set the Group Mode', link: '/grouptopper/holder/mode/' },
                            ]
                        },
                        { label: 'Query', link: '/grouptopper/query/' },
                        {
                            label: 'Hook',
                            items: [
                                { label: 'Introduction', link: '/grouptopper/hook/' },
                                { label: 'LuckPerms', link: '/grouptopper/hook/luckperms/' },
                                { label: 'PlaceholderAPI', link: '/grouptopper/hook/placeholderapi/' },
                            ]
                        }
                    ]
                },
                {
                    label: 'Cachy',
                    items: [
                        { label: 'Introduction', link: '/cachy/' },
                        { label: 'Config', link: '/cachy/config/' },
                        { label: 'Query', link: '/cachy/query/' },
                        {
                            label: 'Hook',
                            items: [
                                { label: 'Introduction', link: '/cachy/hook/' },
                                { label: 'PlaceholderAPI', link: '/cachy/hook/placeholderapi/' },
                            ]
                        }
                    ]
                }
			],
		}),
	],
});
