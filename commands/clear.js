exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: Nincsen jogosultságod ehhez a parancshoz. (F.purge)`)
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:emoji_2:671074745231605760> Hiba történt nincsen **ÜZENETEK_KEZELÉSE** jogom.`);

    if (!args[0]) return message.channel.send(`:thinking: Mennyi üzenetet szeretnél kitörölni?`);
    if (args[0] < 1) return message.channel.send(`:x: Kérlek 1-nél nagyobb számot adj meg.`);
    if (args[0] > 100) return message.channel.send(`:x: Kérlek 100-nál kissebb számot adj meg.`);
    if (isNaN(args[0])) return message.channel.send(`:x: Kérlek korreket számot adj meg.`);

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`:white_check_mark: Sikeresen ki lett törölve **${args[0]}** üzenet!`).then(message => message.delete(2750));
    }).catch().catch((e) => message.channel.send(`:x: Hiba! nem tudsz 14 napnál régebbi üzeneteket törölni.`));

}

module.exports.help = {
    name: "clear",
    category: "moderation",
    description: "kitörli a megadott mennyiségű üzenetet"
}