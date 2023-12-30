let userInput = document.getElementById("userInput");
userInput.addEventListener('keypress', function(event){
    if(event.keyCode === 13) {
        predict();
    }
});
function predict() {
    let result = false;
    let input = document.getElementById("userInput").value;
    console.log(input);
    if(input=="r" || input == "R" || input == "Rock" || input == "rock" || input == "ROCK")
        input = "rock";
    else if(input=="p" || input == "P" || input == "Paper" || input == "paper" || input == "PAPER")
        input = "paper";
    else if(input=="s" || input == "S" || input == "Scissor" || input == "scissor" || input == "SCISSOR")
        input = "scissor";
    else
        result = "wrong input";

    if(result != "wrong input") {
        var options = ["rock", "paper", "scissor"];
        var randomIndex = Math.floor(Math.random() * options.length);
        var randomOption = options[randomIndex];
        console.log("Randomly chosen option:", randomOption);

        if(input == randomOption) {
            alert("Draw");
            result = "draw";
        }
        else if (input=="rock" && randomOption=="paper") {
            alert("you lose");
            result = false;
        }   
        else if (input=="rock" && randomOption=="scissor") {
            alert("you win");
            result = true;
        }
            
        else if (input=="paper" && randomOption=="rock") {
            alert("you win");
            result = true;
        }
            
        else if (input=="paper" && randomOption=="scissor") {
            alert("you lose");
            result = false;
        }
            
        else if (input=="scissor" && randomOption=="rock") {
            alert("you lose");
            result = false;
        }
            
        else if (input=="scissor" && randomOption=="paper") {
            alert("you win");
            result = true;
        }  
        else
            alert("Something went wrong.")
        
        document.getElementById("resultDiv").style.display = "block";
        
        document.getElementById("youSpan").innerHTML = input;
        
        document.getElementById("compSpan").innerHTML = randomOption;

        switch(result) {
            case true:
                document.getElementById("result").innerHTML = "You WON";
                break;
            case false:
                document.getElementById("result").innerHTML = "Sorry, You LOSE.";
                break;
            case "draw":
                document.getElementById("result").innerHTML = "Match DREW.";
                break;
            default:
                document.getElementById("result").innerHTML = "Something went wrong.";
                break;
        }
    }
    else {
        document.getElementById("resultDiv").style.display = "block";
        document.getElementById("youSpan").innerHTML = input;
        document.getElementById("compSpan").innerHTML = undefined;
        document.getElementById("result").innerHTML = "Wrong Input.";
    }


    document.getElementById("userInput").value = "";
    document.getElementById("myButton").innerHTML = "Play Again?";
}