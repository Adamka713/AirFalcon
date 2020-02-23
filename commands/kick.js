exports.run = async(client, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`:x: Nincsen jogosultságod ehhez a parancshoz.`);
    let megemlítettTag = message.mentions.members.first() || message.guild.members.get(args[0]);
    let kickIndok = args.slice(1).join(' ');
    if (!megemlítettTag) return message.channel.send(`:x: Említs meg egy valós tagot.`);
    if (!megemlítettTag.kickable) return message.channel.send(`:x: Nincs jogod kirúgni a(z) megemlített tagot.`);
    await megemlítettTag.kick(kickIndok).catch(error => console.log(`Hiba törént.`));
    message.channel.send(`:white_check_mark: ${megemlítettTag} sikeresen ki lett **kickelve** a szerverről, általa: **${message.author}**. Indok: **${kickIndok}**`).then(m => m.delete(5000))};

module.exports.help = {
    name: "kick",
    category: "moderation",
    description: "kirúgja a(z) megemlített tagot a szerverről"
}