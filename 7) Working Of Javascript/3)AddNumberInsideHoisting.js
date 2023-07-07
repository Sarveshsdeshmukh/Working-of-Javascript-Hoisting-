// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting@

function InsideAddition(Num1 , Num2){
    console.log(sum); //Undefined
    var sum = Num1 + Num2 ;
    return sum ;
}


console.log(InsideAddition(10,19));//29