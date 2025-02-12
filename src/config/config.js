import {dashboardData} from "./dashboard-data";
import {KillKane} from "./features/kill-kane";
import {KillKaneAction} from "./actions/Killkane";

/**
 * @type ConfigType
 */
export const config = {
    name: "Dishub",
    footer: [
        {
            name: {zh: "支持", en: "Support"},
            url: "https://github.com/developerking-s/"
        }
    ],
    settings: detail => [
        {
            id: "say",
            name: "Test",
            type: "string",
            value: detail["say"]
        }
    ],
    actions: {
        "kill_kane": KillKaneAction
    },
    features: {
        "auto_kill_kane": KillKane
    },
    tutorialUrl: "https://github.com/developerking-s/dashbord-sambot",
    serverUrl: "https://dashbord-sambot.vercel.app/",
    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1212115074735415316&permissions=8&scope=bot",
    data: {
        dashboard: dashboardData,
    },
}