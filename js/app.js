
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

// let hunger =
//     document.getElementById("#hunger");
//     console.log(hunger)
// let sleepLife = 
//     document.getElementById("#energy");
//     console.log(energy)
// let playLife =
//     document.getElementById("#play");
//     console.log(play)
// function hungerLife(){
//     for (i = 10, i > 0, i--)

// }  
    
//Add buttons to feed your pet, turn off the lights, and play with your pet
    const hungerBtn = document.querySelector("#action-Feed");
    const sleepBtn = document.querySelector("#action-Sleep");
    const playBtn = document.querySelector("#action-Play");
    const lightBtn = document.querySelector("#action-Light");
//Add scores for each button

    // Make buttons work

// Pet dies if they reach zero, Pet changes as they age up