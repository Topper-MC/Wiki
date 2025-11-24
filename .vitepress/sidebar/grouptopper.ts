import {DefaultTheme} from "vitepress";

const groupTopperSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Config",
        link: "/config/",
    },
    {
        text: "Holder",
        link: "/holder/",
        items: [
            {
                text: "Link a Top Holder",
                link: "/holder/link/",
            },
            {
                text: "Set up Group settings",
                link: "/holder/group/",
                items: [
                    {
                        text: "BentoBox",
                        link: "/holder/group/bentobox/",
                    },
                    {
                        text: "BetterTeams",
                        link: "/holder/group/betterteams/",
                    },
                    {
                        text: "FactionsUUID",
                        link: "/holder/group/factionsuuid/",
                    },
                    {
                        text: "HuskTowns",
                        link: "/holder/group/husktowns/",
                    },
                    {
                        text: "KingdomsX",
                        link: "/holder/group/kingdomsx/",
                    },
                    {
                        text: "Lands",
                        link: "/holder/group/lands/",
                    },
                    {
                        text: "McMMO",
                        link: "/holder/group/mcmmo/",
                    },
                    {
                        text: "Parties",
                        link: "/holder/group/parties/",
                    },
                    {
                        text: "PlaceholderAPI",
                        link: "/holder/group/placeholderapi/",
                    },
                    {
                        text: "SimpleClans",
                        link: "/holder/group/simpleclans/",
                    },
                    {
                        text: "SuperiorSkyblock",
                        link: "/holder/group/superiorskyblock/",
                    },
                    {
                        text: "Towny",
                        link: "/holder/group/towny/",
                    }
                ]
            },
            {
                text: "Set the Group Mode",
                link: "/holder/mode/",
            }
        ]
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
                text: "LuckPerms",
                link: "/hook/luckperms/",
            },
            {
                text: "PlaceholderAPI",
                link: "/hook/placeholderapi/",
            }
        ]
    }
]

export default groupTopperSidebar;