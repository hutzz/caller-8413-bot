import { Client } from "discord.js";
import config from "./config";

import Brady from "./Responses/Brady";
import Dud, { dudQuotes } from "./Responses/Dud";

import Help from "./Responses/Help";
import coinsWrapper from "./Crypto/crypto";

import Author from "./Interface/IAuthor";

export const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once("ready", () => {
	console.log("Caller-8413 is online.");
});

client.on("messageCreate", async (message) => {
	// replies
	const authorInfo: Author = {
		id: message.author.id,
		name: message.author.username,
	};
	const { id, name } = authorInfo;
	if (
		message.content.toLowerCase() === "yo" &&
		authorInfo.id !== config.CLIENT_ID
	)
		await Brady(message, name, id);

	if (
		id === "828682307757015071" &&
		Object.values(dudQuotes).includes(message.content)
	)
		await Dud(message, name, id);
	// commands
	if (message.content === "$help") {
		console.log("Help invoked");
		await Help(message, name, id);
	}
	if (message.content === "$ping") {
		// simple command - replies with pong
		console.log("Ping invoked");
		await message.reply("pong");
	}

	if (message.content === "$crypto") {
		// replies with data on certain notable cryptocurrencies
		console.log("Crypto invoked");
		await message.reply(await coinsWrapper());
	}
});
client.login(config.DISCORD_TOKEN);
