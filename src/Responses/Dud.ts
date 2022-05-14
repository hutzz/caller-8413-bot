export const dudQuotes = {
	quote1: "Did you guys hear about that one time where some guy had bought pizza using bitcoin?",
	quote2: "**NO DUFFLE BAGS!**",
	quote3: "Let's see what my idiot wife ordered on Amazon..",
	quote4: "I hate my wife",
	quote5: "NO PHONES ***PLEASE***!",
	quote6: "**GO TO THE OFFICE, YOU JUST BROKE THE LAW!**",
	quote7: "YOU'RE LATE!",
};
const Dud = async (message: any, name: string, id: string) => {
	console.log("messageCreate: dud");
	console.log(`author: ${name}`);
	console.log(`id: ${id}`);
	await message.reply({ content: "shut up" });
};
export default Dud;
