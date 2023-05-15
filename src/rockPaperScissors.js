const messages = {
  rock: "ROCK! 🪨",
  paper: "PAPER! 📃",
  scissors: "SCISSORS! ✂️",
};

export default async function playRockPaperScissors(interaction) {
  const playerWeapon = interaction.options
    .getString("rock-paper-scissors")
    .trim()
    .toLowerCase()
    .match(/^(rock|paper|scissors)/)?.[0];
  const botWeapon = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];

  if (!playerWeapon) {
    await interaction.reply({
      content: "You need to choose your weapon!",
      ephemeral: true,
    });
    return;
  }

  const result =
    playerWeapon === botWeapon
      ? "It's a tie!"
      : (playerWeapon === "rock" && botWeapon === "scissors") ||
        (playerWeapon === "paper" && botWeapon === "rock") ||
        (playerWeapon === "scissors" && botWeapon === "paper")
      ? "You win!"
      : "You lose!";
  await interaction.reply({
    content: `You chose ${messages[playerWeapon]}!`,
    ephemeral: true,
  });
  setTimeout(async () => {
    await interaction.followUp({
      content: `I chose ${messages[botWeapon]}!`,
      ephemeral: true,
    });
    setTimeout(async () => {
      await interaction.followUp({ content: result, ephemeral: true });
    }, 1000);
  }, 1000);
}
