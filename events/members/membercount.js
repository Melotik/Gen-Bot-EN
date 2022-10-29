module.exports = (client) => {
  const membercountchannel = '845356852979433472' //channel id (recommend to have this id as a voice channel id)
  const updateMembers = (guild) => {
      const channel = guild.channels.cache.get(membercountchannel)
      channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
  }
  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get('842460824798756884') //guild id
  updateMembers(guild)
}