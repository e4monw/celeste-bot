const Discord = require('discord.js');
module.exports = {
  name: 'queue',
  description: 'queue music',
  aliases: [],
  usage: 'queue',
  admin: false,
  execute: async (client, message, config, distube) => {
    const queue = distube.getQueue(message);
    const embed = new Discord.MessageEmbed()
    .setColor('#5b4194')
    .setDescription(`Current queue:\n\n${queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
    message.channel.send(embed);
  },
};
