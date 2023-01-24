console.log("Hello")
const name = document.getElementById("petName");

// Create a class for your Tamagotchi, 
function Pet() {
    constructor() {
    this.name = "name";
    this.sleep = maxSleep;
    this.hunger = maxHunger;
    this.boredom = maxPlay;
    this.age = 1;
    }
}
console.log(Pet);

//Add the ability to name your pet


//Create event listeners/handlers that call methods in your game class

//Display a charecter to represent your pet, must move


//Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age Up
    //Make these decrease on intervals and increase with user action
const maxHunger = 10;
const maxSleep = 10;
const maxPlay = 10;

const hungerLife =
document.querySelector("#hunger");
const sleepLife =
document.querySelector("#sleep");
const playLife =
document.querySelector("#boredom");
    
    
//Add buttons to feed your pet, turn off the lights, and play with your pet
    const hungerBtn = document.querySelector("#action-Feed()");
    const sleepBtn = document.querySelector("#action-Sleep()");
    const playBtn = document.querySelector("#action-Play()");


// Pet dies if they reach zero, Pet changes as they age up