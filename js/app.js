
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

let hunger =
    document.getElementById("#hunger");
    
let energy = 
    document.getElementById("#energy");
    
let play =
    document.getElementById("#play");
 
// function hungerLife(){
//     for (i = 10, i > 0, i--)

// }  
    
//Add buttons to feed your pet, turn off the lights, and play with your pet

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

    // Make buttons work

// Pet dies if they reach zero, Pet changes as they age up