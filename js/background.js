const images = ["0.jpeg","3.jpeg","4.jpeg","6.jpeg","9.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");


body.style.background = `url("img/${chosenImage}")`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundColor = "black";