import { BaseGuildTextChannel, Message } from "discord.js";
import help from "../Responses/help";
import coinsWrapper from "../Crypto/crypto";
import { Flag } from "../Helper/feature-flags";

const commands = async (
	message: Message<boolean>,
	authorInfo: any,
	channel: BaseGuildTextChannel
) => {
	const { id, name } = authorInfo;
	if (message.content === "$help" && Flag.HELP) {
		console.log("Help invoked");
		await help(message, name, id);
	}
	if (message.content === "$ping" && Flag.PING) {
		console.log("Ping invoked");
		await message.reply("pong");
	}

	if (message.content === "$crypto" && Flag.CRYPTO) {
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
};
export default commands;
