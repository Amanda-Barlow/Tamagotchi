
function petName (form) {
    const inputValue = form.inputbox.value;
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
    let uptoHunger=10;
    function hLife(){
    const hCount= document.getElementById("hunger");
    hCount.innerHTML=--uptoHunger;
    if(uptoHunger<=0){
    clearInterval(hunger); alert("Oh no, they died from hunger!")
    }
}

const energy = setInterval(eLife, 12000);
    let uptoEnergy=10;
    function eLife() {        
    const eCount= document.getElementById("energy");
    eCount.innerHTML=--uptoEnergy;
    if(uptoEnergy<=0){
    clearInterval(energy); alert("Oh no, they died from exhaustion!")
    }
}
const play = setInterval(pLife, 6000);
    let uptoPlay = 10;
    function pLife(){
    const pCount= document.getElementById("play");
    pCount.innerHTML=--uptoPlay;
    if(uptoPlay<=0){
    clearInterval(play); alert("Oh no, they died from boredom!")
    }
}
const age = setInterval(ageUp, 10000);
    let uptoAge = 1;
    function ageUp(){
    const aCount= document.getElementById("age");
    aCount.innerHTML=++uptoAge;
    if(uptoAge === 10){
    clearInterval(play); alert("You Win!"); 
    
    }
}   
//Add buttons to feed your pet, turn off the lights, and play with your pet


const button1 = document.getElementById("feed()")
let handleIncrement = () => {
    uptoHunger++;
    feed().innerHTML = count;
}
  
const button2 = document.getElementById("energize()")


const button3 = document.getElementById("playWith()")


const button4 = document.getElementById("lights()")


// Pet dies if they reach zero, Pet changes as they age up