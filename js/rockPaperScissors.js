// Rock Paper Scissors written in Objects created in the block scope

let choicesObject = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}

// Going to predict the result of the game with the function below:

function checker(input) {

     //The computer randomize the choices in the array  in the Global Excution Context

    var choices =["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    // let is used for its own memory space so that it cannot be over written if the same let is called in this block.

    let computerChoice = choices[num];
        let result

    // The game rules. Switch statement is used to replace multiple if checks.

    switch (choicesObject[input][computerChoice]) {
        case 'win':
        result = "You Win!!!";
        break;
        case 'lose':
        result ="You lose!!! Aahhh!!!"
        break;
        default:
        result = "DRAW!!!"
        break;
    }
            console.log(result);
            document.getElementById('result').textContent = result;
            
}

// computerChoice can written  out side the function block in its own memory space and be called.
/* 
let computerChoice = alert('Warning you are going to lose');
 */
