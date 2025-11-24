import {DefaultTheme} from "vitepress";

const cachySidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Config",
        link: "/config/",
    },
    {
        text: "Query",
        link: "/query/",
    },
    {
        text: "Hook",
        link: "/hook/",
        items: [
            {
                text: "PlaceholderAPI",
                link: "/hook/placeholderapi/",
            }
        ]
    }
]

export default cachySidebar;