import {defineConfig} from 'vitepress'
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs'
import topperSidebar from "./sidebar/topper";
import timedTopperSidebar from "./sidebar/timedtopper";
import groupTopperSidebar from "./sidebar/grouptopper";
import cachySidebar from "./sidebar/cachy";

export default defineConfig({
    title: "Topper",
    description: "A framework for single-value data tables",
    head: [
        ['link', {rel: 'icon', href: 'https://topper-mc.github.io/Assets/topper/logo.svg'}]
    ],

    srcDir: "src",
    base: "/Wiki/",
    sitemap: {
        hostname: "https://topper-mc.github.io/Wiki/",
    },
    metaChunk: true,

    themeConfig: {
        logo: "https://topper-mc.github.io/Assets/topper/logo.svg",

        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Projects',
                items: [
                    {text: 'Topper', link: '/topper'},
                    {text: 'TimedTopper', link: '/timedtopper'},
                    {text: 'GroupTopper', link: '/grouptopper'},
                    {text: 'Cachy', link: '/cachy'},
                ]
            }
        ],

        sidebar: {
            "/topper/": [
                {
                    text: 'Topper',
                    base: "/topper",
                    link: '/',
                    items: topperSidebar
                }
            ],
            "/timedtopper/": [
                {
                    text: 'TimedTopper',
                    base: "/timedtopper",
                    link: '/',
                    items: timedTopperSidebar
                }
            ],
            "/grouptopper/": [
                {
                    text: 'GroupTopper',
                    base: "/grouptopper",
                    link: '/',
                    items: groupTopperSidebar
                }
            ],
            "/cachy/": [
                {
                    text: 'Cachy',
                    base: "/cachy",
                    link: '/',
                    items: cachySidebar
                }
            ],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Topper-MC'}
        ],

        search: {
            provider: "local"
        },

        editLink: {
            pattern: 'https://github.com/Topper-MC/Wiki/edit/main/src/:path'
        },

        outline: "deep"
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
        }
    },
    async transformPageData(pageData) {
        if (pageData.filePath.startsWith("topper/")) {
            pageData.titleTemplate = "Topper"
        } else if (pageData.filePath.startsWith("timedtopper/")) {
            pageData.titleTemplate = "TimedTopper"
        } else if (pageData.filePath.startsWith("grouptopper/")) {
            pageData.titleTemplate = "GroupTopper"
        } else if (pageData.filePath.startsWith("cachy/")) {
            pageData.titleTemplate = "Cachy"
        }
    }
})
