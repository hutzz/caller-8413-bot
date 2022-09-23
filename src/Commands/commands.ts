import { BaseGuildTextChannel, Message } from "discord.js";
import help from "../Responses/help";
import coinsWrapper from "../Crypto/crypto";
import { Flag } from "../Helper/feature-flags";
import { httpGet, httpPost } from "../Helper/http-requests";
import fs from "fs";

const commands = async (
	message: Message<boolean>,
	authorInfo: any,
	channel: BaseGuildTextChannel
) => {
	try {
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
		if (message.content.startsWith("$mp4 ") && Flag.MP4) {
			const args = message.content.split(" ");
			if (args[1].match(/^https:\/\/www\.youtube\.com\/watch\?v=.+/)) {
				const path = await httpPost(
					"http://127.0.0.1:5000/mp4",
					args[1]
				);
				if (path === "h") {
					await message.reply("file too big, download aborted");
				} else {
					await message.reply({ files: [path] });
					fs.unlinkSync(path);
				}
			}
		}
		if (message.content.startsWith("$mp3 ")) {
			const args = message.content.split(" ");
			if (args[1].match(/^https:\/\/www\.youtube\.com\/watch\?v=.+/)) {
				const path = await httpPost(
					"http://127.0.0.1:5000/mp3",
					args[1]
				);
				if (path === "h") {
					await message.reply("file too big, download aborted");
				} else {
					await message.reply({ files: [path] });
					fs.unlinkSync(path);
				}
			}
		}
		try {
			if (message.content === "$abbiejobcount") {
				const url = "http://127.0.0.1:5000/";
				const data = await httpGet(url);
				await message.reply("current abbie job count is " + data);
			}
			if (message.content.startsWith("$abbiejobcount ")) {
				const args = message.content.split(" ");
				if (args[1] === "+=" && !isNaN(args[2] as unknown as number)) {
					const url = "http://127.0.0.1:5000/addjob";
					const data = await httpPost(url, args[2]);
					await message.reply("updated job count is " + data);
				} else if (
					args[1] === "-=" &&
					!isNaN(args[2] as unknown as number)
				) {
					const url = "http://127.0.0.1:5000/deletejob";
					const data = await httpPost(url, args[2]);
					await message.reply("updated job count is " + data);
				}
			}
		} catch (exception) {
			console.log("Failed: " + exception);
			await message.reply(
				"couldn't access server - zach probably forgot to run it lol"
			);
		}
	} catch (exception) {
		console.log("error: " + exception);
	}
};
export default commands;
