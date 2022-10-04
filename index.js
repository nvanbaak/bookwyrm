// created following the guide at https://discordjs.guide/

// get discord stuff
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// make client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// confirm ready status
client.once('ready', () => {
    console.log("Bookwyrm online!");
});

// connect to discord
client.login(token);
