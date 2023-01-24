
const name = document.getElementById("petName");
const maxHunger = 10;
const maxEnergy = 10;
const maxPlay = 10;

// Create a class for your Tamagotchi, 
function Pet() {
    constructor()
    this.name = "name";
    this.energy = maxEnergy;
    this.hunger = maxHunger;
    this.play = maxPlay;
    this.age = 1;
    }
console.log (Pet);
//Create event listeners/handlers that call methods in your game class
//Display a charecter to represent your pet, must move


//Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age Up
    //Make these decrease on intervals and increase with user action

const hungerLife =
document.querySelector("#hunger");
const energyLife =
document.querySelector("#energy");
const playLife =
document.querySelector("#play");
 console.log (hungerLife)   
    
//Add buttons to feed your pet, turn off the lights, and play with your pet
    const hungerBtn = document.querySelector("#action-Feed");
    const sleepBtn = document.querySelector("#action-Sleep");
    const playBtn = document.querySelector("#action-Play");
    const lightBtn = document.querySelector("#action-Light");
//Add scores for each button

    // Make buttons work

// Pet dies if they reach zero, Pet changes as they age up