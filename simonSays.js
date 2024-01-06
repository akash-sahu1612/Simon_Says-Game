// simonSays Game(It boosts your memory) with lights
//Start the game by pressing any key.simonSays game is sequence game where you have to remember the pattern(sequence) of light,than you have to follow the same sequence(previous lights will also be added in sequence),If you press the wrong sequence than red flads would be there,which ends the game, than the score will be calculated and will be shown.
// agaijn you can start the game by pressing any key.
// By using the concepts of JS DOM
let gameSeq=[];
let userSeq=[];

let  btns=["yellow","red","purple","green"];

let started = false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false) {
    console.log("game is started");
    started=true;
    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose
    let  randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset() {
    started=false;
    gameSeq=[];
    userSeq=0;
    level=0;
}