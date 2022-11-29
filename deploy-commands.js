// script to register slash commands to the server ID in config.json
// hacked together from multiple locations on https://discordjs.guide/

const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

