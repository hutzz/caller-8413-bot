import { Client, TextChannel } from "discord.js";

import responses from "./Responses/responses";

import config from "./config";

import help from "./Responses/help";
import coinsWrapper from "./Crypto/crypto";

import { Flag } from "./Helper/feature-flags";

export const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once("ready", () => {
	console.log("Caller-8413 is online.");
});

client.on("messageCreate", async (message) => {
	// replies
	const channel = client.channels.cache.get(
		"975518545263857716"
	) as TextChannel;
	const authorInfo = {
		id: message.author.id,
		name: message.author.username,
	};

	responses(message, authorInfo);

	const { id, name } = authorInfo;

	// commands
	if (message.content === "$help" && Flag.HELP) {
		console.log("Help invoked");
		await help(message, name, id);
	}
	if (message.content === "$ping" && Flag.PING) {
		// simple command - replies with pong
		console.log("Ping invoked");
		await message.reply("pong");
	}

	if (message.content === "$crypto" && Flag.CRYPTO) {
		// replies with data on certain notable cryptocurrencies
		console.log("Crypto invoked");
		await message.reply(await coinsWrapper());
	}
	if (message.content === "$persistentcrypto" && Flag.PERSISTENTCRYPTO) {
		console.log("Persistent crypto invoked");
		const msg = await channel.send(await coinsWrapper());
		setInterval(async () => {
			msg.edit(await coinsWrapper());
		}, 15000);
	}
});
client.login(config.DISCORD_TOKEN);
