// import inquirer from "inquirer";

// let answers = await inquirer.prompt([
//     {message:"Enter any number",type:"number",name:"Firstnumber"},
//     {message:"Enter any number",type:"number",name:"Secondnumber"},
//     {
//         message:"Select any operator from operations",
//         type:"list",
//         name:"operator",
//         choices:["Addition","Subtraction","Multiplication","Division"],
//     },
// ]);

// if (answers.operator === "Addition") {
//     console.log(answers.Firstnumber + answers.Secondnumber)
// }
// else if (answers.operator === "Subtraction") {
//     console.log(answers.Firstnumber - answers.Secondnumber)
// }
// else if (answers.operator === "Multiplication") {
//     console.log(answers.Firstnumber * answers.Secondnumber)
// }
// else if (answers.operator === "Division") {
//     console.log(answers.Firstnumber / answers.Secondnumber)
// }
// else{
//     console.log("Invalid Value !!")
// }

import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {message:"Enter Any Number",type:"number",name:"FirstNumber"},
    {message:"Enter Any Number",type:"number",name:"SecondNumber"},
    {
        message:"Select any operator from operation",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber+answer.SecondNumber)
}
else if (answer.operator ==="Subtraction"){
    console.log(answer.FirstNumber-answer.SecondNumber)
}
else if (answer.operator ==="Multiplication"){
    console.log(answer.FirstNumber*answer.SecondNumber)
}
else if (answer.operator ==="Division"){
    console.log(answer.FirstNumber/answer.SecondNumber)
}
else{
    console.log("Invalid Value !")
}
















