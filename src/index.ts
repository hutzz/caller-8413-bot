import { Client, TextChannel } from "discord.js";
import config from "./config";

import Brady from "./Responses/Brady";
import Rant from "./Responses/Rant";
import { cadenQuotes } from "./Responses/Caden";

import Help from "./Responses/Help";
import coinsWrapper from "./Crypto/crypto";

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
	const { id, name } = authorInfo;
	if (
		message.content.toLowerCase() === "yo" &&
		authorInfo.id !== config.CLIENT_ID
	)
		await Brady(message, name, id);
	if (message.content === "<rant>") await Rant(message, name, id);

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
	if (message.content === "$persistentcrypto") {
		console.log("Persistent crypto invoked");
		const msg = await channel.send(await coinsWrapper());
		setInterval(async () => {
			msg.edit(await coinsWrapper());
		}, 15000);
	}
	if (
		authorInfo.id === "365938029640024064" &&
		message.content.match(cadenQuotes) !== null
	) {
		console.log("caden's talking about working out again");
		await message.reply("we get it dude you work out");
	}
});
client.login(config.DISCORD_TOKEN);
