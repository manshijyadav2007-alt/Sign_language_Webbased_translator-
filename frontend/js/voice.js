const recognition = new webkitSpeechRecognition();
recognition.onresult = e => {
  textBox.innerText = e.results[0][0].transcript;
};
function speak(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}