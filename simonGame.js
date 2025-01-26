let gameSeq = [];
let userSeq = [];

let highScore = [0];

let color = ["red","yellow","green","blue"];

let level = 0;
let start = false;
let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function() {
    if(start == false){
        start = true;
        levelUp();
    }
});

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
    userSeq = [];

    let rnd = Math.floor(Math.random() * 3);
    let rndClr = color[rnd];
    
    flash(rndClr);
}

function flash(rndClr){

    let btn = document.querySelector(`.${rndClr}`);

    btn.classList.add("white");

    setTimeout(function(){
        btn.classList.remove("white");
    },250);

    gameSeq.push(rndClr);
    console.log(gameSeq);
}
function userflash(rndClr){

    let btn = document.querySelector(`.${rndClr}`);

    btn.classList.add("white");

    setTimeout(function(){
        btn.classList.remove("white");
    },100);
}

let btns = document.querySelectorAll(".btn")
for(btn of btns){
    btn.addEventListener("click",userClick);
}
function userClick(){

    userflash(this.id);
    userSeq.push(this.id);
    check(userSeq.length-1);
}
function check(inx){

    if(gameSeq[inx] == userSeq[inx]){
        if(gameSeq.length == userSeq.length){
            console.log(userSeq);
            setTimeout(levelUp,500);
        }
    }
    else{
        h3.innerHTML=`GAME OVER... Your score <b> ${level} </b>.<br> Press any key to start the game`;
        
        highScore.push(level);
        let hs = Math.max(...highScore);

        let h2 = document.querySelector("h2");
        h2.innerText = `Your's highest score was ${hs}`;

        reset();

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){  
            document.querySelector("body").style.backgroundColor="white";
        },200);
    }
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    start=false;
}