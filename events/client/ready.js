module.exports = async client => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setPresence({ activity: { name: `${client.config.PREFIX}help・https://rdimo.github.io/CheatAway/`, type: 'WATCHING' }, status: 'online' }); // | ${client.guilds.cache.size.toString()} Servers`, type: 'WATCHING' }, status: 'dnd' });

client.on("reconnecting", () => {
    client.user.setStatus("idle");
    console.log(`${client.user} is Reconnecting`); 
});

  client.on("disconnected", () => {
    client.user.setStatus("dnd");
    console.log(`${client.user} Just Disconnected!`); 
});
}