const help = async (message: any, id: string, name: string) => {
	console.log(`author: ${name}`);
	console.log(`id: ${id}`);
	let str =
		"```" +
		`
$help: Brings up this help page
$ping: Pong obviously
$crypto: Market data on select cryptocurrencies
$persistentcrypto: Same as $crypto but refreshes every 15 seconds
$mp4 <url>: Takes a YouTube link and replies with the downloaded video
$mp3 <url>: Takes a YouTube link and replies with an mp3
$abbiejobcount: Displays number of jobs Abbie currently has
$abbiejobcount += <int>: Adds jobs to Abbie's job count
$abbiejobcount -= <int>: Removes jobs from Abbie's job count` +
		"```";
	await message.reply({ content: str });
};
export default help;
