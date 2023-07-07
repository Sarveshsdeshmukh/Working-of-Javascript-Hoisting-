// &@ Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting@


console.log(result(3,4));

const result =  function (num1 , num2){
    return num1 * num2;
}

// Output --> ReferenceError: Cannot access 'result' before initialization
// at Object.<anonymous> (/config/workspace/7) Revision Session/2)Multiply.js:4:13)
// at Module._compile (node:internal/modules/cjs/loader:1155:14)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
// at Module.load (node:internal/modules/cjs/loader:1033:32)
// at Function.Module._load (node:internal/modules/cjs/loader:868:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:22:47