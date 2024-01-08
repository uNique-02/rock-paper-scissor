
let click = null;
let play = 0;

function generate() {
    let computer = Math.floor(Math.random() * 3) + 1;
    const player2 = document.getElementById("player2");
    if (computer == 1) {
        player2.style.backgroundImage = "url('rock-right.png')";
        if(play == 1) {
            document.getElementById("prompt").innerHTML = "Tie";
            document.getElementById("sidebar1").style.backgroundImage = "url('okay.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('okay.gif')";
            document.body.style.backgroundImage = "url('okay.gif')";
        }else if(play == 2) {
            document.getElementById("prompt").innerHTML = "Congratulations, You Won!";
            document.getElementById("sidebar1").style.backgroundImage = "url('congrats.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('congrats.gif')";
            document.body.style.backgroundImage = "url('congrats.gif')";
        }else{
            document.getElementById("prompt").innerHTML = "You Lose";
            document.getElementById("sidebar1").style.backgroundImage = "url('wrong.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('wrong.gif')";
            document.body.style.backgroundImage = "url('wrong.gif')";
        }
    } else if (computer == 2) {
        player2.style.backgroundImage = "url('hand.png')";
        if(play == 1) {
            document.getElementById("prompt").innerHTML = "You Lose";
            document.getElementById("sidebar1").style.backgroundImage = "url('wrong.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('wrong.gif')";
            document.body.style.backgroundImage = "url('wrong.gif')";
        }else if(play == 2) {
            document.getElementById("prompt").innerHTML = "Tie";
            document.getElementById("sidebar1").style.backgroundImage = "url('okay.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('okay.gif')";
            document.body.style.backgroundImage = "url('okay.gif')";
        }else{
            document.getElementById("prompt").innerHTML = "Congratulations, You Won!";
            document.getElementById("sidebar1").style.backgroundImage = "url('congrats.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('congrats.gif')";
            document.body.style.backgroundImage = "url('congrats.gif')";
        }
    } else {
        player2.style.backgroundImage = "url('scissors.jpg')";
        if(play == 1) {
            document.getElementById("prompt").innerHTML = "Congratulations, You Won!";
            document.getElementById("sidebar1").style.backgroundImage = "url('congrats.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('congrats.gif')";
            document.body.style.backgroundImage = "url('congrats.gif')";
        }else if(play == 2) {
            document.getElementById("prompt").innerHTML = "You Lose";
            document.getElementById("sidebar1").style.backgroundImage = "url('wrong.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('wrong.gif')";
            document.body.style.backgroundImage = "url('wrong.gif')";
        }else{
            document.getElementById("prompt").innerHTML = "Tie";
            document.getElementById("sidebar1").style.backgroundImage = "url('okay.gif')";
            document.getElementById("sidebar2").style.backgroundImage = "url('okay.gif')";
            document.body.style.backgroundImage = "url('okay.gif')";
        }
    }
}

document.getElementById("rockBtn").addEventListener("click", function() {
    document.getElementById("player1").style.backgroundImage = "url('rock-right.png')";
    play = 1;
    generate();
});

document.getElementById("paperBtn").addEventListener("click", function() {
    document.getElementById("player1").style.backgroundImage = "url('hand.png')";
    play = 2;
    generate();
});

document.getElementById("scissorBtn").addEventListener("click", function() {
    document.getElementById("player1").style.backgroundImage = "url('scissors.jpg')";
    play = 3;
    generate();
});



