import { BaseGuildTextChannel, Message } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import help from "../Responses/help";
import coinsWrapper from "../Crypto/crypto";
import { Flag } from "../Helper/feature-flags";
import { httpGet, httpPost } from "../Helper/http-requests";
import * as pattern from "../Helper/patterns";
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
		if (message.content.startsWith("$rammap ")) {
			const args = message.content.split(" ");
			if (message.content.match(pattern.ram)) {
				if (
					(args[1] as unknown as number) < 1000 ||
					(args[1] as unknown as number) >
						(args[2] as unknown as number)
				) {
					await message.reply("first parameter too small or too big");
				} else if (
					(args[2] as unknown as number) > 10000 ||
					(args[2] as unknown as number) <
						(args[1] as unknown as number)
				) {
					await message.reply(
						"second parameter too big or too small"
					);
				} else if (
					(args[3] as unknown as number) < 1 ||
					(args[3] as unknown as number) >
						(args[4] as unknown as number)
				) {
					await message.reply("third parameter too small or too big");
				} else if (
					(args[4] as unknown as number) > 100 ||
					(args[4] as unknown as number) <
						(args[3] as unknown as number)
				) {
					await message.reply(
						"fourth parameter too small or too big"
					);
				} else if (
					(args[1] as unknown as number) % 100 != 0 &&
					(args[1] as unknown as number) % 100 != 33 &&
					(args[1] as unknown as number) % 100 != 66
				) {
					await message.reply("invalid first parameter number");
				} else if (
					(args[2] as unknown as number) % 100 != 0 &&
					(args[2] as unknown as number) % 100 != 33 &&
					(args[2] as unknown as number) % 100 != 66
				) {
					await message.reply("invalid second parameter number");
				} else {
					const url = "http://127.0.0.1:5000/rammap";
					const nums: number[] = [
						args[1] as unknown as number,
						args[2] as unknown as number,
						args[3] as unknown as number,
						args[4] as unknown as number,
					];
					const path = await httpPost(url, nums);
					await message.reply(
						"Columns: Megatransfers (MT); Rows: CAS Latency; Rest is in nanoseconds"
					);
					await message.reply({ files: [path] });
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
