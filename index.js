console.log("welcome to Game One");

const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout
});

function handleUserResponse (response){

    

    console.log(response);
    readline.close();
}

readline.question("Please choose either rock, paper or scissors! \n", handleUserResponse);
