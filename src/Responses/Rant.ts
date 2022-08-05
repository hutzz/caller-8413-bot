import { Message } from "discord.js";

const rant = async (message: Message<boolean>, name: string, id: string) => {
	console.log("messageCreate: rant");
	console.log(`author: ${name}`);
	console.log(`id: ${id}`);
	await message.reply({
		content:
			"I understand that I may be gifted with these sorts of things, and as such I'm not an example of a typical peer, but I've had this assignment done since like 3 days after it came out. 2 weeks should be ample time for anyone to do it. If not, you need to learn valuable skills like reading documentation (I posted a link to JavaCUP documentation, it's in the pins) and googling effectively (a simple google search for JLex help will eventually point you do Princeton U's amazing documentation). If you can't google and read documentation, you will not make it in software development.",
	});
};
export default rant;
