let { RichEmbed } = require('discord.js');

exports.run = async(client, message, args) => {
  
        if (!message.member.hasPermission("DEAFEN_MEMBERS"))
            return message.reply("❌ Nincs engedélyed az üzenetek kezelésére. Kérjük, vedd fel a kapcsolatot egy vezetővel!").then(m => m.delete(5000));

        if (args.length == 0)
            return message.reply("❌ Nincs mit mondani?").then(m => m.delete(5000));

        message.delete();
        
        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor("BLUE");

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
