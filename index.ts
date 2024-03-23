#! /usr/bin/env node

import inquirer from "inquirer";

const questions = [
    {message:"Please enter first name: ", type:"input", name:"firstName"},
    {message:"Please enter last name: ", type:"input", name:"lasttName"},
    {message:"Please enter father name: ", type:"input", name:"fatherName"},
    {message:"Please enter email address: ", type:"input", name:"emailAddress"},
    {message:"Please enter last qualification: ", type:"input", name:"lastQualification"},
    {message:"Select gender: ", type:"input", name:"genderName"},
]

const answer = await inquirer.prompt(questions);
console.log("\n Thanks for your precious time.");
console.log(answer);
console.log("\nAbove mentioned data collected for education perpose only.")