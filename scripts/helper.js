
$(“#time-control .total-time").addClass("helper");

const helper = player.playPauseAndUpdate(song) {
  player.playPause(song);
  const totalTime = player.getDuration();
  $('#time-control .total-time').text(player.prettyTime(totalTime));
}
