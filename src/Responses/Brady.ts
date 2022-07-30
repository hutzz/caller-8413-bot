const brady = async (message: any, name: string, id: string) => {
	console.log("messageCreate: brady");
	console.log(`author: ${name}`);
	console.log(`id: ${id}`);
	await message.reply({ content: "WHAT'S UP BRADY?" });
};
export default brady;
