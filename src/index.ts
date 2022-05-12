import { Client } from "discord.js";
import config from "./config";

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
	console.log("Caller-8413 is online.");
});
client.on("messageCreate", (message) => {
	console.log("messageCreate");
	const authorId = message.author.id;
	const authorName = message.author.username;
	console.log(`author: ${authorName}`);
	if (message.content === "hello") {
		message.reply({ content: "world" });
	}
});
client.login(config.DISCORD_TOKEN);
