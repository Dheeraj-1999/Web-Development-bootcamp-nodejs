// **********************************************************************************************
// giving Colors to squares
var colors;
var squares = document.querySelectorAll(".square");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedColor;
var nSquares = 6;
var pickedColorDisp = document.getElementById("pickedColor");
var newColors = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

var modes = document.querySelectorAll(".mode");

function hitSquare() {
    squares[i].addEventListener("click", function() {
        if(this.style.backgroundColor !== pickedColor) {
            this.style.backgroundColor = "black";
            messageDisp.textContent = "TryAgain!"
            // this.classList.add("wrongSelected");
        } else {
            messageDisp.textContent= "Correct!";
            changeColors();
            giveHColor();
            newColors.textContent = "Play Again!";
            
        }
    });
}

function giveHColor() {
    
    h1.style.background = pickedColor;
}

function changeColors() {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function reset() {
    // nSquares = 6;
    // if(easyBtn.classList.length > 0) {
    //     nSquares = 3;
    // }
    colors = giveColorRandom(nSquares);
    pickedColor = pickColorRandom(nSquares);
    pickedColorDisp.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
        if(colors[i]){  
            squares[i].style.display = "block";     
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        } 

    }
    h1.style.background = "rgb(61, 17, 61)";
    messageDisp.textContent = "";
    newColors.textContent = "New Colors";
}

function pickColorRandom(number) {
    var random = Math.floor(Math.random()*number);
    console.log(random);
    return  colors[random];
}

function giveColorRandom(numbers) {
    colors = []
    
    for (var i=0; i<numbers; i++) {
        var r = Math.floor(Math.random()*255+1);
        var g = Math.floor(Math.random()*255+1);
        var b = Math.floor(Math.random()*255+1);
        var color = "rgb(";
        color += r + ", " + g + ", " + b + ")";
        colors.push(color);
    }
    return(colors);
}


// -********************************* ###### *** ####### *** #####    *** ####### ***************************************************************************************
// ********************************** ##     *** ##   ## *** ##   ##  *** ##      ****************************************************************************
// ********************************** ##     *** ##   ## *** ##    ## *** ####### *********************************************************************************
// *********************************  ##     *** ##   ## *** ##    ## *** ##      *********************************************************************************
// ********************************** ###### *** ####### *** ######   *** ####### **************************************************


colors = giveColorRandom(nSquares);
console.log(colors);
for(var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // ******************************************************************************
    // hit event on clicking the square..;./.....;...........................
    hitSquare();
}

// ******************************************************************************
// logic behind picked color

pickedColor = pickColorRandom(nSquares);
pickedColorDisp.textContent = pickedColor;

// **********************************************************************************
// Button New Colors!

newColors.addEventListener("click", function() {
    reset(nSquares);
});



for(var i=0; i<modes.length; i++) {

    // *************************** which mode to be selected *******************************
    //******************** mode[0] ==== easy .. mode[1] ==== hard ************************
    modes[i].addEventListener("click", function() {
        modes[0].classList.remove("selected"); // if this\clicked button is hard ie mode[1];
        modes[1].classList.remove("selected"); // if this->refers to easy ie mode[0];
        this.classList.add("selected");

// ***************************************************************************************
        // figure out how many squares to show
        // pick new colors
        // pick new pickedColor
        // update page to refelect changes
        console.log(modes[0].classList.length);
        if(this.textContent == "Easy") {
            nSquares = 3;
            
            // for(var i=3; i<squares.length; i++){
            //     squares[i].style.display = "none";
            // }
        } else {
            nSquares = 6;
            // for(var i=3; i<squares.length; i++){
            //     squares[i].style.display = "block";
            // }
        }
        reset(nSquares);
    });

}
// ******************************************************************************************
// ************************************* Hard Code of easy button and Hard button *********************

// easyBtn.addEventListener("click", function() {
//     this.classList.add("selected");
//     hardBtn.classList.remove("selected");

//     colors = giveColorRandom(3);
//     pickedColor = pickColorRandom(3);
//     pickedColorDisp.textContent = pickedColor;
//     reset();
    // for(var i=3; i<squares.length; i++){
    //     squares[i].style.display = "none";
    // }
//     
// });

// hardBtn.addEventListener("click", function() {
//     this.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     reset();
//     for(var i=3; i<squares.length; i++){
//         squares[i].style.display = "block";
//     }
// });
