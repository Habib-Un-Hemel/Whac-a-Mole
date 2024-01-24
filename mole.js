let currMole;
let currPlant;
let score=0;
// this gameover is for the last check if he or she is hitting the plant or not
let gameOver=false;


window.onload=function() {
    setGame();
}

function setGame(){
    //set up the grid in html
    for (let i = 0; i < 9; i++){ 
        //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile= document.createElement("div");
        tile.id= i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    // this is the controller to increase or decrease the challage of the game. 
    setInterval(setMole,1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant,1000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}
// this is how i gererate the the plant and mole.
function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num=Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if(gameOver){
        return;
    }
    if (currMole) {
        currMole.innerHTML = "";
    }
    let mole=document.createElement("img");
    mole.src="./monty-mole.png";

    let num=getRandomTile();
    if (currPlant && currPlant.id == num) {
        return;
    }
    currMole= document.getElementById(num);
    currMole.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlant) {
        currPlant.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src ="./piranha-plant.png";

    let num = getRandomTile();
    if (currMole && currMole.id==num) {
        return;
    }
    currPlant = document.getElementById(num);
    currPlant.appendChild(plant);
}
// mainly here i increase score if someone hit the mole,however if he hits the plant then the game will over .
function selectTile(){
    if (gameOver) {
        return;
    }
    if (this == currMole) {
        score += 1;
        document.getElementById("score").innerText = "Score: "+score.toString(); //update score html
    }
    else if (this == currPlant) {
        document.getElementById("score").innerText = "Game Over: " + score.toString(); //update score html
        gameOver = true;
    }
}