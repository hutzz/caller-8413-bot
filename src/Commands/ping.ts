import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder().setName("ping").setDescription("pong"),
	async execute(interaction: CommandInteraction) {
		console.log(`author: ${interaction.user.username}`);
		console.log(`id: ${interaction.user.id}`);
		await interaction.reply("pong");
	},
};
