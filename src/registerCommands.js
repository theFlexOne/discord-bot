import { config } from "dotenv";
import { REST, Routes, ApplicationCommandOptionType } from "discord.js";

config();

const commands = [
  {
    name: "show-me",
    description: "Play rock-paper-scissors with the bot",
    options: [
      {
        name: "rock-paper-scissors",
        type: ApplicationCommandOptionType.String,
        description: "Choose your weapon",
        required: true,
        choices: [
          {
            name: "ROCK! 🪨",
            value: "rock",
          },
          {
            name: "PAPER! 📃",
            value: "paper",
          },
          {
            name: "SCISSORS! ✂️",
            value: "scissors",
          },
        ],
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_GUILD_ID
      ),
      { body: commands }
    );
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
