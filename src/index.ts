import { Client, TextChannel } from "discord.js";
import responses from "./responses/responses";
import config from "./config";

export const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const slashCommands = [
	require("./commands/help"),
	require("./commands/ping"),
	require("./commands/mp4"),
	require("./commands/mp3"),
	require("./Commands/ram_map"),
	require("./commands/abbie_job_count"),
];

client.once("ready", () => {
	console.log("Caller-8413 is online.");
});

client.on("messageCreate", async (message: any) => {
	const channel = client.channels.cache.get(
		"973733038322221057"
	) as TextChannel;
	const authorInfo = {
		id: message.author.id,
		name: message.author.username,
	};
	responses(message, authorInfo);
});

client.on("interactionCreate", async (interaction: any) => {
	console.log("interaction");
	if (!interaction.isCommand()) return;
	const command: any = slashCommands.find(
		(command) => command.data.name === interaction.commandName
	);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.log(error);
		await interaction.reply("error");
	}
});
client.login(config.DISCORD_TOKEN);
