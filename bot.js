const { Client } = require("discord.js");
const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`I'm online, my name is ${client.user.username}`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "Fejlesztés alatt!",
            type: "WATCHING"
        }
    })
});

client.on("message", async message => {
    console.log(`${message.author.username} said: ${message.content}`);
});

client.on("message", async message => {
    const prefix = "!";

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));   

    if(command)
        command.run(client, message, args);

    if(cmd === "ping") {
        const msg = await message.channel.send(`Pinging...`);

        msg.edit(`Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
    }
});



client.login("NjcyOTIxODgzNjI4NDA0Nzcy.XjYR5A.cAPBjDNCJSPoPFpoKs9RxLPrLTA");