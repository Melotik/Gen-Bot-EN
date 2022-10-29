const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {

message.channel.send(new MessageEmbed()
        .setColor(client.config.colors.Default)
        .setDescription('Still work in progress')
    )
}
module.exports.help = {
    name: "raid",
    aliases: ['raid', 'twitch-raid'],
    category: 'twitch',
    description: "Raid a twitch streamer!",
    cooldown: 300,
    usage: '',
    example: ["raid pewdiepie"],
    isUserAdmin: false,
    moderator: false,
    args: false,
    userPermissions: [],
    botPermissions: [],
    subcommands: []
};
