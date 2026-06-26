async function translateText() {

const text=document.getElementById("text").value;
const source=document.getElementById("source").value;
const target=document.getElementById("target").value;

const url=
`https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

try{

const response=await fetch(url);

const data=await response.json();

document.getElementById("result").innerText=
data.responseData.translatedText;

}
catch(error){

document.getElementById("result").innerText=
"Translation failed";

}

}


// Copy button

function copyText(){

let translated=
document.getElementById("result").innerText;

navigator.clipboard.writeText(translated);

alert("Copied Successfully");

}


// Text To Speech

function speakText() {

let text = document.getElementById("result").innerText;

if (!text) {
    alert("Please translate text first");
    return;
}

let speech = new SpeechSynthesisUtterance(text);

speech.rate = 1;
speech.pitch = 1;
speech.volume = 1;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);

}