#!/usr/bin/env node
import inquirer from "inquirer"
let playagain= true;
while (playagain){
const randomnumber = Math.floor(Math.random()*6 + 1);
const asnwer = await inquirer.prompt([
{
    name:"userGuessedNumber",
    type:"number",
    message:"Please guess a number:",
},
]); 

if (asnwer.userGuessedNumber === randomnumber){
console.log("Congratulations! you guessed a right number.");
playagain=false;}
else {
    console.log("You guessed a wrong number . let's try again.")
}
}