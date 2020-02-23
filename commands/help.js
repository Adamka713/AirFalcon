const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

        const msg = await message.channel.send(`Várakozás...`);
      
        msg.edit(`> **__ Tag parancsok: __**
> **!?report (név) (indok) ** - Reportolhatod a játékostársaid, ha van velük valami baj
> **!?ping ** - Megnézheted, hogy mi a válaszideje a botnak
> **!?help ** - Megnézheted a parancs listát
> 
> **__ Admin parancsok: __**
> **!?clear (szám) ** - Kitöröl egy megadott számú üzenetet
> **!?kick (név) (indok) ** - Kirúg egy illetőt a szerverről
> **!?ban (név) (indok) ** - Kitilt egy illetőt a szerverről
> **!?unban ** - Egy kitiltott játékost felold a szerverről
> **!?say ** - Írhatsz valamit a bot nevében
> **!?warn ** - Figyelmeztethetsz egy illetőt`);};

module.exports.help = {
    name: "help",
    category: "bot",
    description: "megmutatja a parancsokat"
}	