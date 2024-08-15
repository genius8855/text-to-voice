let speech = new SpeechSynthesisUtterance();

function speakText(){
    speech.text = document.getElementById("inputArea").value;
    if(speech.text == ''){
        alert('Enter Something First');
        return;
    }
    window.speechSynthesis.speak(speech);
}

function clearArea(){
    document.getElementById("inputArea").value = "";
}

function pauseSpeak(){
    speechSynthesis.pause();
}

function resumeSpeech() {
    speechSynthesis.resume();
}