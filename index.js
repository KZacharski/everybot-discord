const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
    console.log('EveryBot created by Puffercat. Open source licence on GitHub.');
    client.user.setActivity('Open Source project by Puffercat.', { type: 'WATCHING' });
});

client.login(token);
client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (message.content === `${prefix}author`) {
        message.channel.send('My creator is Kacper Zacharski, Puffercat.');
    }
        });

