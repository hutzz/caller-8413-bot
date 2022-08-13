import { Message } from "discord.js";
import brady from "./brady";
import rant from "./rant";
import * as pattern from "../Helper/patterns";
import { httpGet, httpPost } from "../Helper/httpRequests";
import config from "../config";

const responses = async (message: Message<boolean>, authorInfo: any) => {
	try {
		const { id, name } = authorInfo;
		if (
			message.content.toLowerCase() === "yo" &&
			authorInfo.id !== config.CLIENT_ID
		)
			await brady(message, name, id);
		if (message.content === "<rant>") await rant(message, name, id);
		if (
			message.content.match(pattern.redditMoment) &&
			id !== "973731092836266024"
		) {
			console.log("reddit moment observed");
			await message.reply("reddit moment");
		}
		if (message.content === "abbiejobcount") {
			try {
				const url = "http://127.0.0.1:5000/";
				const data = await httpGet(url);
				await message.reply("current abbie job count is " + data);
			} catch (exception) {
				console.log("Failed: " + exception);
				await message.reply(
					"couldn't access server - zach probably forgot to run it lol"
				);
			}
		}
		if (message.content.startsWith("abbiejobcount ")) {
			try {
				const args = message.content.split(" ");
				if (args[1] === "+=" && !isNaN(args[2] as unknown as number)) {
					const url = "http://127.0.0.1:5000/addjob";
					const data = await httpPost(url, args[2]);
					await message.reply("updated job count is " + data);
				}
				if (args[1] === "-=" && !isNaN(args[2] as unknown as number)) {
					const url = "http://127.0.0.1:5000/deletejob";
					const data = await httpPost(url, args[2]);
					await message.reply("updated job count is " + data);
				}
			} catch (exception) {
				console.log("Failed: " + exception);
				await message.reply(
					"couldn't access server - zach probably forgot to run it lol"
				);
			}
		}
	} catch (exception) {
		console.log("uh oh: " + exception);
	}
};
export default responses;
