import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

const roles = [
  {
    id: "1107166777013715037",
    label: "Test Role",
  },
];

export default function ready(client) {
  client.on("ready", async (c) => {
    try {
      const channel = client.channels.cache.get("1107165910621507626");
      if (!channel) return;

      const row = new ActionRowBuilder().addComponents(
        ...roles.map((role) => {
          return new ButtonBuilder()
            .setCustomId(role.id)
            .setLabel(role.label)
            .setStyle(ButtonStyle.Primary);
        })
      );

      await channel.send({
        content: "Click the button to get the role!",
        components: [row],
      });
      process.exit;
    } catch (error) {
      console.error(error);
    }
  });
}
