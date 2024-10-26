const greeting = document.getElementById("greeting");

greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
greeting.style.color = "grey"
greeting.style.fontSize= "4em"

const username = window.prompt("What's your name?", "Please enter your name!");



greeting.innerHTML = "Welcome to my website, " + username +"!";


