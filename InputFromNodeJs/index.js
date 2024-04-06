
// Import the readLine library to take input
const readLine = require('readline')

// configure interface to connect with terminal
const interface = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

// now using interface take the input
interface.question("Enter the first Number ", (num1)=>{
    interface.question("Enter the second Number ", (num2)=>{
        const sum = Number(num1) + Number(num2)
        console.log(sum)
    });
});

