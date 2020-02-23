const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(!args[0]){
    let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("**Használat:** !?unban @név <indok>")
  message.channel.send(embed)
  return;
  }
  if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Nincs jogod hogy használd ezt a parancsot!")

  let user = await client.fetchUser(args[0])
  if(!user) return message.reply("Nem találom ezt a felhasználót");

  let reason = args.slice(1).join(" ")
  if(!reason) reason = "Kérlek írj indokot";

  // Unban a user by ID (or with a user/guild member object)
  message.guild.unban(user)
  .then(user => console.log(`Unbanned ${user.username} from ${message.guild.name}`))
  .catch(console.error);

  let unbanEmbed = new Discord.RichEmbed()
  .setTitle("Feloldás")
  .setColor("RED")
  .setTimestamp()
  .addField("Feloldva", `${user}`)
  .addField("Indok:", reason)
  .addField("Feloldotta:", `${message.author}`)
  .setTimestamp()
  .setFooter("teszt");
  message.channel.send(unbanEmbed);
  message.delete()
}
exports.help = {
  name: "unban"
}