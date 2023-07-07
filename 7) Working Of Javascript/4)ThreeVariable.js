// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting@

// Inside The Block Scope

{
    console.log(letVariable);  // ReferenceError: Cannot access 'letVariable' before initialization
    console.log(varVariable);  // undefined
    console.log(constVariable);  // ReferenceError: Cannot access 'constVariable' before initialization
  
    let letVariable = "Let Variable";
    var varVariable = "Var Variable";
    const constVariable = "Const Variable";
  
    console.log(letVariable);  // Let Variable
    console.log(varVariable);  // Var Variable
    console.log(constVariable);  // Const Variable
  }
  
