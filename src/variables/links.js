const isProduction = process.env.NODE_ENV === "production"

const redirectUri = isProduction ? "https://app.yeecord.com" : "http://localhost:3000"
const clientId = isProduction ? "584213384409382953" : "840770984821784601"

export const oauth2 = (state) =>
	`https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}/auth&response_type=code&scope=guilds%20identify&prompt=consent&state=${state}`

export const api = isProduction ? "https://api.yeecord.com" : "https://api-preview.yeecord.com"

export const support = "https://discord.gg/yeecord"

export const homepage = "https://yeecord.com/"

export const invite = "https://yeecord.com/link"

export const credit = "https://yeecord.com/docs/credit/"

export const github = "https://github.com/yeecord"
