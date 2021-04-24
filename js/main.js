const speakButton = document.querySelector(".speak-button");
const userMessage = document.querySelector(".user-message");
let speechText = "";
speakButton.addEventListener("click", () => {
  speechText = userMessage.value;
  var message = new SpeechSynthesisUtterance();
  if (speechText != "") {
    message.text = speechText;
  } else {
    message.text = "Please write something";
  }
  message.voice = speechSynthesis.getVoices()[49]
  window.speechSynthesis.speak(message);
});
