import {DefaultTheme} from "vitepress";

const groupTopperSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Config",
        link: "/config",
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
    }
]

export default groupTopperSidebar;