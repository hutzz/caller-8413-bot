import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { httpPost } from "../helper/http-requests";
import * as pattern from "../helper/patterns";
import fs from "fs";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("rammap")
		.setDescription(
			"Creates a table comparing true RAM latency, in nanoseconds."
		)
		.addIntegerOption((option) =>
			option
				.setName("spdmin")
				.setDescription("Minimum speed in range.")
				.setRequired(true)
		)
		.addIntegerOption((option) =>
			option
				.setName("spdmax")
				.setDescription("Maximum speed in range.")
				.setRequired(true)
		)
		.addIntegerOption((option) =>
			option
				.setName("casmin")
				.setDescription("Minimum CAS latency in range.")
				.setRequired(true)
		)
		.addIntegerOption((option) =>
			option
				.setName("casmax")
				.setDescription("Maximum CAS latency in range")
				.setRequired(true)
		),
	async execute(interaction: CommandInteraction) {
		const args = [
			interaction.options.getInteger("spdmin"),
			interaction.options.getInteger("spdmax"),
			interaction.options.getInteger("casmin"),
			interaction.options.getInteger("casmax"),
		];
		console.log(args);
		await interaction.deferReply();
		if (
			(args[0] as unknown as number) < 1000 ||
			(args[0] as unknown as number) > (args[1] as unknown as number)
		) {
			await interaction.editReply("first parameter too small or too big");
		} else if (
			(args[1] as unknown as number) > 10000 ||
			(args[1] as unknown as number) < (args[0] as unknown as number)
		) {
			await interaction.editReply("second parameter too big or too small");
		} else if (
			(args[2] as unknown as number) < 1 ||
			(args[2] as unknown as number) > (args[3] as unknown as number)
		) {
			await interaction.editReply("third parameter too small or too big");
		} else if (
			(args[3] as unknown as number) > 100 ||
			(args[3] as unknown as number) < (args[2] as unknown as number)
		) {
			await interaction.editReply("fourth parameter too small or too big");
		} else if (
			(args[0] as unknown as number) % 100 != 0 &&
			(args[0] as unknown as number) % 100 != 33 &&
			(args[0] as unknown as number) % 100 != 66
		) {
			await interaction.editReply("invalid first parameter number");
		} else if (
			(args[1] as unknown as number) % 100 != 0 &&
			(args[1] as unknown as number) % 100 != 33 &&
			(args[1] as unknown as number) % 100 != 66
		) {
			await interaction.editReply("invalid second parameter number");
		} else {
			const url = "http://127.0.0.1:5000/rammap";
			const nums: number[] = [
				args[0] as unknown as number,
				args[1] as unknown as number,
				args[2] as unknown as number,
				args[3] as unknown as number,
			];
			const path = await httpPost(url, nums);
			// await interaction.editReply(
			// 	"Columns: Megatransfers (MT); Rows: CAS Latency; Rest is in nanoseconds"
			// );
			await interaction.editReply({ files: [path] });
		}
	},
};
