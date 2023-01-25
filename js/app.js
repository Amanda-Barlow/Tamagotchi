
function petName (form) {
    var inputValue = form.inputbox.value;
    alert ("You Named Your Pet: " + inputValue);
}

// Create a class for your Tamagotchi, 
const Pet = function(petName, energy, hunger, play, age) {
    this.petName = petName;
    this.energy = energy;
    this.hunger = hunger;
    this.play = play;
    this.age = age;
    }

console.log(Tamagotchi = new Pet (petName, 10, 10, 10, 1))

//Create event listeners/handlers that call methods in your game class
//Display a charecter to represent your pet, must move

//Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age Up
    //Make these decrease on intervals and increase with user action

const hunger = setInterval(hLife, 8000);
    let upto=10;
    function hLife(){
    const hCount= document.getElementById("hunger");
    hCount.innerHTML=--upto;
    if(upto<=1){
    clearInterval(hunger); 
    }
}

const energy = setInterval(eLife, 8000);
    function eLife() {        
    const eCount= document.getElementById("energy");
    eCount.innerHTML=--upto;
    if(upto<=1){
    clearInterval(energy); 
    }
}
const play = setInterval(pLife, 8000);
    function pLife(){
    const pCount= document.getElementById("play");
    pCount.innerHTML=--upto;
    if(upto<=1){
    clearInterval(play); 
    }
}
    
//Add buttons to feed your pet, turn off the lights, and play with your pet
const button = document.querySelector("js-button")

button.addEventListener("click", Feed());
    function Feed() {
    for(let h = 0; h >= 10; h++);{
       return (hunger[h] + 1) 
    }

}
button.addEventListener("click", Energy());

    button.addEventListener("click", Play());

    button.addEventListener("click", Lights());
    
function lights() {
        document.getElementById("lights");
    }

//Add scores for each button



// Pet dies if they reach zero, Pet changes as they age up