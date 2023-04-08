import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("Displays command help page."),
	async execute(interaction: CommandInteraction) {
		console.log(`author: ${interaction.user.username}`);
		console.log(`id: ${interaction.user.id}`);
		await interaction.reply(
			"```" +
				`
$help: Brings up this help page
$ping: Pong obviously
$crypto: Market data on select cryptocurrencies
$persistentcrypto: Same as $crypto but refreshes every 15 seconds
$mp4 <url>: Takes a YouTube link and replies with the downloaded video
$mp3 <url>: Takes a YouTube link and replies with an mp3
$rammap <speed min> <speed max> <CAS min> <CAS max>: Creates a table comparing true RAM latency, in nanoseconds, in the specified range of values in megatransfers (MT) and CAS latency.
$abbiejobcount: Displays number of jobs Abbie currently has
$abbiejobcount += <int>: Adds jobs to Abbie's job count
$abbiejobcount -= <int>: Removes jobs from Abbie's job count` +
				"```"
		);
	},
};
