const help = async (message: any, id: string, name: string) => {
	console.log(`author: ${name}`);
	console.log(`id: ${id}`);
	let str =
		"```\n" +
		`$help: Brings up this help page.\n$ping: Pong obviously\n$crypto: Market data on select cryptocurrencies.` +
		"\n```";
	await message.reply({ content: str });
};
export default help;
