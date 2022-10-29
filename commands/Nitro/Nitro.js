const randomstring = require("randomstring");
module.exports.run = async (client, message) => {
    if (message.channel.id !== client.config.channels.nitro) return message.channel.sendErrorMessage(`This command can only be used in <#${client.config.channels.nitro}>`)
message.delete()
message.channel.send("https://discord.gift/" + randomstring.generate(30));
}
module.exports.help = {
    name: "nitro",
    aliases: ['nitro'],
    category: 'kahoot',
    description: "Generate a random nitro code!",
    cooldown: 5,
    usage: '',
    example: [],
    isUserAdmin: false,
    moderator: false,
    args: false,
    userPermissions: [],
    botPermissions: [],
    subcommands: []
};