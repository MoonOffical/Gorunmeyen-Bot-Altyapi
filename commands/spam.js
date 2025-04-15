const Discord = require("discord.js")
const db = require("croxydb");
module.exports = {
     name: "spam",
     description: "Spam komutu.",
     type: 1,
     options: [
          {
               name: 'text',
               description: "Spam atılacak metni giriniz.",
               type: 3,
               required: true,
          }
     ],
     run: async (client, interaction) => {
          try {
               const text = interaction.options.getString("text") || "Belirtilmemiş."
               const row = new Discord.ActionRowBuilder()
                    .addComponents(
                         new Discord.ButtonBuilder()
                              .setCustomId(`spam-${interaction.user.id}`)
                              .setLabel("Spamla")
                              .setStyle(Discord.ButtonStyle.Primary)
                    )

               await interaction.reply({
                    embeds: [{
                         author: { name: `Daltonlar Bot`, iconURL: client.user.avatarURL() },
                         description: "Spamlamak için butona bas."
                    }], ephemeral: true, components: [row]
               })
               db.set(`user_${interaction.user.id}`, text)
          } catch (err) {
               console.log(err)
          }
     }
}
