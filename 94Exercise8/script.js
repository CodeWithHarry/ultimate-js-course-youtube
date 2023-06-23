// The HTML AudioElement Interface can be used to play audio in the browser.
// Create an alarm clock which display time and plays sound at a user specified time

function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}


setTimeout(() => {
  play()
}, 12000)