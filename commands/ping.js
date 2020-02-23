const Discord = require('discord.js');

exports.run = async (client, message, args) => {

        const msg = await message.channel.send(`Várakozás..`);
      
        msg.edit(`:ping_pong: Pong\nKésleltetés: ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Betöltési ideje: ${Math.round(client.ping)}ms`);};

module.exports.help = {
    name: "ping",
    category: "bot",
    description: "teszteli a botot"
}	

