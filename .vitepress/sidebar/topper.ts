import {DefaultTheme} from "vitepress";

const topperSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Quick Start",
        link: "/quickstart",
    },
    {
        text: "Commands & Permissions",
        link: "/commands",
    },
    {
        text: "Config",
        link: "/config",
    },
    {
        text: "Frequently Asked Questions",
        link: "/faq",
    },
    {
        text: "Query",
        link: "/query",
    },
    {
        text: "Value Provider",
        link: "/provider",
        items: [
            {
                text: "Statistic",
                link: "/provider/statistic"
            },
            {
                text: "Placeholder",
                link: "/provider/placeholder",
            },
            {
                text: "MiniPlaceholder",
                link: "/provider/miniplaceholder",
            }
        ]
    },
    {
        text: "Hook",
        link: "/hook",
        items: [
            {
                text: "PlaceholderAPI",
                link: "/hook/placeholderapi",
            },
            {
                text: "MiniPlaceholders",
                link: "/hook/miniplaceholders",
            },
            {
                text: "LuckPerms",
                link: "/hook/luckperms",
            },
            {
                text: "LastLoginAPI",
                link: "/hook/lastloginapi",
            }
        ]
    },
    {
        text: "Extra",
        link: "/extra",
        items: [
            {
                text: "Customize Value Provider",
                link: "/extra/provider",
            },
            {
                text: "Create a Hologram",
                link: "/extra/hologram",
            },
            {
                text: "Create a Top Block",
                link: "/extra/block",
            },
            {
                text: "Create an NPC",
                link: "/extra/npc",
            },
            {
                text: "Playtime Leaderboard",
                link: "/extra/playtime",
            },
            {
                text: "Value Display",
                link: "/extra/value_display",
            },
            {
                text: "Migrate from 2.X",
                link: "/extra/migrate_v2",
            }
        ]
    }
]

export default topperSidebar;