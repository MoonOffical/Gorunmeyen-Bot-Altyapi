const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { TOKEN } = require("../ayarlar.js");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);

const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users", "everyone"]
  },
  partials: PARTIALS,
  retryLimit: 3
});

module.exports = async (client) => {

  const rest = new REST({ version: "10" }).setToken(TOKEN);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (error) {
    console.error(error);
  }

  console.log(`${client.user.tag} olarak giriş yaptım!`);
  client.user.setActivity(`Code World!`)
};
