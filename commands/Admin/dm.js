module.exports.run = async (client, message, args) => {	
if (message.author.id != client.config.owner.id) return;
message.delete();
const user = message.mentions.users.first();

if (!user) return message.channel.send('Vous devez mentionez la personne!').then(m => m.delete({ timeout: 1000 }))
user.send(args.slice(1).join(" "))
}
module.exports.help = {
    name: "dm",
    aliases: ['dm'],
    category: 'admin',
    description: "permet de dm quelqun",
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