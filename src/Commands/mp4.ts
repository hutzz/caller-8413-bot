import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { httpPost } from "../helper/http-requests";
import fs from "fs";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("mp4")
		.setDescription(
			"Provides an mp4 file of a given YouTube video, provided that it's not too large."
		)
		.addStringOption((option) =>
			option
				.setName("url")
				.setDescription("The URL of the YouTube video.")
				.setRequired(true)
		),
	async execute(interaction: CommandInteraction) {
		const args = interaction.options.getString("url")!;
		if (args.match(/^https:\/\/www\.youtube\.com\/watch\?v=.+/)) {
			await interaction.deferReply();
			const path = await httpPost("http://127.0.0.1:5000/mp4", args);
			if (path === "h") {
				await interaction.editReply("file too big, download aborted");
			} else {
				await interaction.editReply({ files: [path] });
				fs.unlinkSync(path);
			}
		}
	},
};
