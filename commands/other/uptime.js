const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
    var seconds = parseInt((client.uptime / 1000) & 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;

let Timeembed = new MessageEmbed()
    .setColor(client.config.colors.Default)
    .setDescription(`βππ°πΆπ³: ${hours}\n\nβ±ππͺπ―πΆπ΅π¦π΄: ${minutes}\n\nβππ¦π€π°π―π₯π΄: ${seconds}`)
message.channel.send(Timeembed)
}
module.exports.help = {
    name: "uptime",
    aliases: ['uptime', 'ut'],
    category: 'other',
    description: "get the bots uptime",
    cooldown: 3,
    usage: '',
    example: [],
    isUserAdmin: false,
    moderator: false,
    args: false,
    userPermissions: [],
    botPermissions: [],
    subcommands: []
};