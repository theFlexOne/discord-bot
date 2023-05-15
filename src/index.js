import { Client, IntentsBitField } from "discord.js";
import { config } from "dotenv";
config();
import onReady from "./events/ready.js";
import onMessageCreate from "./events/messageCreate.js";
import playRockPaperScissors from "./rockPaperScissors.js";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

onReady(client);
onMessageCreate(client);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "show-me") {
    playRockPaperScissors(interaction);
  }
});

client.login(process.env.DISCORD_TOKEN);
