const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const server = require('./server.js');

//Mikor a bot sikeresen bejelentkezett (ready)

client.on('ready', () => {
    console.log(`Bejelentkezve mint ${client.user.tag}!\nSzerverszám: ${client.guilds.size}`);
    client.user.setPresence({ game: { name: `Dev: FaoN & AirFalcon`, type: 'WATCHING' }, status: 'online' });
});

//Command handler - Parancsfeldolgozó (parancsok/parancs.js)

client.on('message', async(message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {}
});


client.login("NjcyOTIxODgzNjI4NDA0Nzcy.Xk1H0A.RvkVAZMUjAcKnQC48pyVeP2bm0c");
             
            