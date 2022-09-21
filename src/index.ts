import { Client, TextChannel } from "discord.js";
import responses from "./Responses/responses";
import config from "./config";
import commands from "./Commands/commands";

export const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once("ready", () => {
	console.log("Caller-8413 is online.");
});

client.on("messageCreate", async (message) => {
	const channel = client.channels.cache.get(
		"973733038322221057"
	) as TextChannel;
	const authorInfo = {
		id: message.author.id,
		name: message.author.username,
	};
	responses(message, authorInfo);
	commands(message, authorInfo, channel);
});
client.login(config.DISCORD_TOKEN);
