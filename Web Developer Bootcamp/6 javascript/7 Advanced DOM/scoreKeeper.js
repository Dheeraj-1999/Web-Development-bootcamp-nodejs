var p1 = 0;
var p2 = 0;
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var heading = document.querySelector("h1");
var btns = document.querySelectorAll("button");
var p1Btn = btns[0];
var p2Btn = btns[1];
var resetBtn = btns[2];
var gameOver = false;
var win = 5;
var maxScore = document.querySelector("input");
var maxScoreDisp = document.querySelector("p span");

p1Btn.addEventListener("click", function() {
    if(!gameOver){
        p1 += 1;
        p1Display.textContent = p1;
        if(p1 === win) {
            // alert("Game Over!");
            gameOver = true;
            p1Display.classList.add("win");
        }
    }
});

p2Btn.addEventListener("click", function() {
    if(!gameOver){
        p2 += 1;
        p2Display.textContent = p2;
        if(p2 === win) {
            // alert("Game Over!");
            gameOver = true;
            p2Display.classList.add("win");
        }
    }
})


resetBtn.addEventListener("click", function() {
    reset();
    // maxScore.textContent = 5;
})


maxScore.addEventListener("change", function() {
    win = Number(maxScore.value);
    maxScoreDisp.textContent = maxScore.value;
    reset();

});

function reset() {
    p2 = 0;
    p1 = 0;
    
    p1Display.textContent = p1;
    p2Display.textContent = p2;
    p1Display.classList.remove("win");
    p1Display.classList.remove("win");
    gameOver = false;
}
// console.log(p1Btn);

