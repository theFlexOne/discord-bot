const PREFIX = "$";

const commands = {
  ping(message, args) {
    message.channel.send("pong");
  },
  sum(message, args) {
    const num1 = +args[0];
    const num2 = +args[1];
    message.channel.send(`The sum is ${num1 + num2}`);
  },
  testing(message, args) {
    console.log(message.guild);
    message.channel.send(message.guild.name);
  },
};

export default function messageCreate(client) {
  client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
      const [CMD_NAME, ...args] = message.content
        .trim()
        .slice(PREFIX.length)
        .split(/\s+/);

      console.log(CMD_NAME);
      console.log(args);

      commands[CMD_NAME](message, args);
    }
  });
}
