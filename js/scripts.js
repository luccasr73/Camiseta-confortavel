var audio = document.getElementById("audio"); 

function tocamusica() { 
    audio.play(); 
} 
audio.onscroll = function() {tocamusica()};
audio.ontouchstart = function() {tocamusica()};
audio.onclick = function() {tocamusica()};
