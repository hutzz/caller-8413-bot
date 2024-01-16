import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { httpGet, httpPost } from "../helper/http-requests";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("abbiejobcount")
		.setDescription(
			"Displays Abbie's job count, or adds/removes from the count."
		)
		.addStringOption((option) =>
			option
				.setName("action")
				.setDescription("'add' to add jobs, 'remove' to remove jobs.")
		)
		.addIntegerOption((option) =>
			option
				.setName("number")
				.setDescription(
					"Number of jobs to add/remove to/from Abbie's job count."
				)
		),
	async execute(interaction: CommandInteraction) {
		const baseUrl = "http://caller-8413-backend-server-1:5000/";
		try {
			await interaction.deferReply();
			if (!interaction.options.getString("action")) {
				const url = baseUrl;
				const data = await httpGet(url);
				await interaction.editReply("current abbie job count is " + data);
			} else {
				const args = [
					interaction.options.getString("action"),
					interaction.options.getInteger("number"),
				];
				if (args[0] === "add" && args[1]) {
					const url = baseUrl + "addjob";
					const data = await httpPost(url, args[1]);
					await interaction.editReply("updated job count is " + data);
				} else if (args[0] === "remove") {
					const url = baseUrl + "deletejob";
					const data = await httpPost(url, args[1]);
					await interaction.editReply("updated job count is " + data);
				} else {
					await interaction.editReply("invalid input");
				}
			}
		} catch (exception) {
			console.log("Failed: " + exception);
			await interaction.editReply(
				"couldn't access server - zach probably forgot to run it lol"
			);
		}
	},
};
