const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
    const mCount = new MessageEmbed()
    .setColor(client.config.colors.Default)
    .setDescription(`**${message.guild.name}** has: \n \n ${message.guild.memberCount} members!`)
    
    message.channel.send(mCount)
}
module.exports.help = {
    name: "membercount",
    aliases: ['membercount', 'membercounter'],
    category: 'other',
    description: "get the amount of guild members in CheatAway",
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