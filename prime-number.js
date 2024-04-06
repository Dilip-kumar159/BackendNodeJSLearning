const number = 33
let isPrime = false

for(let i=2; i<number; i++){

    if(number % i == 0){
        isPrime = true
        break
    }
}

if(isPrime){
    console.log(`The Number ${number} is not a prime number`)
}
else{
    console.log(`The Number ${number} is a prime number`)
}




// console.log("start")
// setTimeout(() => {
//     console.log("Log inside Timeout");
// },0)
// let i = 10
// while(i--){
//     console.log("log inside while loop")
// }


// const compute = () => {

//     let sum = 0;

//     for(let i=1; i<=1000000000; i++) sum+=i;

//     console.log(sum)
// }

// setTimeout(compute, 0);

// console.log("End")

// let i = 0;
// setInterval(() => {
//     i++;
//     console.log(i);
// }, 100);

// console.log(i)

// const idle = (ms) => {

//     let start = new Date().getTime();

//     while(new Date().getTime() < start + ms);
// }

// console.log("Start")
// idle(5000)
// console.log("End")