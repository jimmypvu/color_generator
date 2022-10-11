//color choices array, 0=red 1=green ... 5=yellow
const colors = ["red", "green", "blue", "cyan", "magenta", "yellow"];

const button = document.getElementById("btn");
let colorText = document.querySelector(".colorText");

//put a smurf on the button to listen for clicks, run function when clicked
button.addEventListener('click', function(){
    //get random number between 0 - 5 (for 5 items in choices array, r g b c m y)
    let randomNumber = getRandomNumber();

    //select document body and style it with randomly generated color
    document.body.style.backgroundColor = colors[randomNumber];

    //select color element (span) on dom and change text contents
    colorText.innerText = colors[randomNumber];
});


// get random number between 0 - 5
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}