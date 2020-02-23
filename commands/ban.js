const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(!args[0]){
    let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("**Használat:** !?ban @név <indok>")
  message.channel.send(embed)
  return;
  }
  if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Nincs jogod hogy használd ezt a parancsot!")

  let user = message.mentions.users.first();
  if(!user) return message.reply("Nem találom ezt a felhasználót");

  let reason = args.join(" ");
  if(!reason) reason = "Kérlek írj indokot";

  message.guild.ban(reason);

  let banEmbed = new Discord.RichEmbed()
  .setTitle("Kitiltás")
  .setColor("RED")
  .setTimestamp()
  .addField("Kitiltva", `${user}`)
  .addField("Indok:", reason)
  .addField("Kitiltotta:", `${message.author}`)
  .setTimestamp()
  .setFooter("teszt");
  message.channel.send(banEmbed);
  message.delete()
}
exports.help = {
  name: "ban"
}