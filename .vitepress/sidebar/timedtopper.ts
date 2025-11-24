import {DefaultTheme} from "vitepress";

const timedTopperSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Config",
        link: "/config",
    },
    {
        text: "Holder",
        link: "/holder",
        items: [
            {
                text: "Link a Top Holder",
                link: "/holder/link",
            },
            {
                text: "Set time interval",
                link: "/holder/time",
            },
            {
                text: "Set up Reward",
                link: "/holder/reward",
            }
        ]
    },
    {
        text: "Query",
        link: "/query",
    },
    {
        text: "Hook",
        link: "/hook",
        items: [
            {
                text: "LuckPerms",
                link: "/hook/luckperms",
            },
            {
                text: "PlaceholderAPI",
                link: "/hook/placeholderapi",
            }
        ]
    },
    {
        text: "API",
        link: "/api",
    }
]

export default timedTopperSidebar;