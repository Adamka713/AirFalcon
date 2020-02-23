const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const Discord = require('discord.js');

module.exports = {
      name: "report",
      category: "moderation",
      description: "Tudsz másokat reportolni ezzel a paranccsal!",
      usage: "<mention | id>",
      run: async (client, message, args) => {
        if(message.deletable) message.delete();
        
        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
        
        if(!rMember)
          return message.reply(" **__Helyes használat:__** !?report <név> <indok>").then(m => m.delete(5000));
        
        if (rMember.user.bot)
          return message.reply("Nem jelentheted ezt a felhasználót!").then(m => m.delete(5000));
      
        if (!args[1])
          return message.channel.send("Kérlek add meg az okot a jelentésednek!").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(channel => channel.name === "warn-jelentések");
        
        if(!channel)
          return message.channel.send("Nem találom a \#jelentések\ szobát!").then(m => m.delete(5000));
        
        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Jelentés", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**> Jelentett felhasználó:** ${rMember} (${rMember.id})
            
            **> Reportoló felhasználó:** ${message.member} (${message.member.id})
            
            **> Csatorna:** ${message.channel}
            
            **> Indok:** ${args.slice(1).join(" ")}`);
        
        message.reply("Felhasználó sikeresen jelentve! **__Köszönjük!__**");
        return channel.send(embed);
        message.delete(2750);
      }
}