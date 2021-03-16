module.exports = (distube, status) => {
  distube
    .on('playSong', (message, queue, song) => message.channel.send(
      `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`,
    ))
    .on('addSong', (message, queue, song) => message.channel.send(
      `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
    ))
    .on('playList', (message, queue, playlist, song) => message.channel.send(
      `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`,
    ))
    .on('addList', (message, queue, playlist) => message.channel.send(
      `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`,
    ))
    // DisTubeOptions.searchSongs = true
    .on('searchResult', (message, result) => {
      let i = 0;
      message.channel.send(`**Choose an option from below**\n${result.map((song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join('\n')}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    // DisTubeOptions.searchSongs = true
    .on('searchCancel', (message) => message.channel.send('Searching canceled'))
    .on('error', (message, e) => {
      console.error(e);
      message.channel.send(`An error encountered: ${e}`);
    });
};
