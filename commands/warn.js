const Discord = require('discord.js');
const { stripIndents } = require("common-tags");

exports.run = (client, message, args) => {
    var embedColor = '#ffffff'
    
    var missingPermissionsEmbed = new Discord.RichEmbed()
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Nincs engedélyed hozzá!')
        .setDescription('Szükséged lesz "Üzenetek kezelése" jogra a használathoz!')
        .setTimestamp();
    var missingArgsEmbed = new Discord.RichEmbed()
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Hiányzó ok!')
        .setDescription('Használat: `!?warn [@Felhasználó] [Ok]')
        .setTimestamp();
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed);
    let mentioned = message.mentions.users.first();
    if(!mentioned) return message.channel.send(missingArgsEmbed);
    let reason = args.slice(1).join(' ')
    if(!reason) return message.channe.send(missingArgsEmbed);
  
  let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
  
  const channel = message.guild.channels.find(channel => channel.name === "warn-jelentések");
        
        if(!channel)
          return message.channel.send("Nem találom a \#warn\ szobát!").then(m => m.delete(5000));

    var warningEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Figyelmeztetés", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**> Figyelmeztetett felhasználó:** ${rMember} (${rMember.id})
          
            **> Figyelmeztető felhasználó:** ${message.member} (${message.member.id})
            
            **> Csatorna:** ${message.channel}
            
            **> Indok:** ${args.slice(1).join(" ")}`);
  
    mentioned.send(warningEmbed);
    var warnSuccessfulEmbed = new Discord.RichEmbed()
        .setColor(embedColor)
        .setTitle('Felhasználó sikeresen figyelmeztetve!');
    message.channel.send(warnSuccessfulEmbed).then(m => m.delete(5000));;
    return channel.send(warningEmbed);
    message.delete(2750);
}