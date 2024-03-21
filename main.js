import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter Your first number: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter Your second number: "
    },
    {
        type: "list",
        name: "Operator",
        choices: ["Addition +", "Substraction -", "Multiplication *", "Division /"],
        message: "Selector Operator: "
    }
]);
const { numberOne, numberTwo, Operator } = answers;
if (numberOne && numberTwo && Operator) {
    let result = 0;
    if (Operator == "Addition +") {
        result = numberOne + numberTwo;
    }
    else if (Operator == "Substraction -") {
        result = numberOne - numberTwo;
    }
    if (Operator == "Multiplication *") {
        result = numberOne * numberTwo;
    }
    if (Operator == "Division /") {
        result = numberOne / numberTwo;
    }
    console.log("Your answer is: ", result);
}
else {
    console.log("Error! Enter correct input.");
}
