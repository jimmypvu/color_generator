//hex array, hex goes from A-F and 0-9
let hexRange = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const button = document.getElementById("btn");
let colorText = document.querySelector(".colorText");
let colorName = document.querySelector(".colorName")

//put a smurf on the dom button to listen for clicks, run randomize function when clicked
button.addEventListener('click', randomize);


//pick a random item in our hex range array, do it 6 times
function randomize(){
    let hexColor = "#";
    for (let i=0; i<6; i++){
        hexColor = hexColor + hexRange[Math.floor(Math.random()*hexRange.length)];

//note to self, check console log to see for loop in action
    console.log(hexColor);
    console.log(ntc.name(hexColor));

    let n_name = ntc.name(hexColor);
    console.log(n_name[1].toLowerCase());

    document.body.style.backgroundColor = hexColor;
    colorText.innerText = hexColor;
    colorName.innerText = n_name[1].toLowerCase();
}}