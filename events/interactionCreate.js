const { Collection, EmbedBuilder } = require("discord.js");
const db = require("croxydb");
const { readdirSync } = require("fs");
module.exports = async (client, interaction) => {
  if (interaction.isChatInputCommand()) {
    if (!interaction.guildId) return;
    readdirSync('./commands').forEach(f => {
      const cmd = require(`../commands/${f}`);
      if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {
        return cmd.run(client, interaction, db);
      }
    });
  }

  if (interaction.isButton()) {
    if (interaction.customId.startsWith("spam")) {
      try {
        let text = await db.get(`user_${interaction.user.id}`)
        await interaction.reply({ content: `${text} @everyone` });
        for (let i = 0; i < 4; i++) {
          await interaction.followUp({ content: `${text} @everyone` });
        }
      } catch (err) {
        console.log("Mesaj hatası salla moon baba piro")
      }
    }

  }


};
