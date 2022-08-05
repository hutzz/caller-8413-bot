import brady from "./brady";
import rant from "./rant";
import * as pattern from "../Helper/patterns";
import config from "../config";
import { Message } from "discord.js";

const responses = async (message: Message<boolean>, authorInfo: any) => {
	const { id, name } = authorInfo;
	if (
		message.content.toLowerCase() === "yo" &&
		authorInfo.id !== config.CLIENT_ID
	)
		await brady(message, name, id);
	if (message.content === "<rant>") await rant(message, name, id);
	if (
		authorInfo.id === "365938029640024064" &&
		message.content.toLowerCase().match(pattern.cadenQuotes)
	) {
		console.log("caden's talking about working out again");
		await message.reply("we get it dude you work out");
	}
	if (
		message.content.match(pattern.redditMoment) &&
		authorInfo.id !== "973731092836266024"
	) {
		console.log("reddit moment observed");
		await message.reply("reddit moment");
	}
	if (message.content.startsWith("yea") && id === "828682307757015071") {
		let resp = await message.reply("delete your message that's what");
		setTimeout(() => message.delete(), 1000);
		setTimeout(() => resp.delete(), 1000);
	}
};
export default responses;
