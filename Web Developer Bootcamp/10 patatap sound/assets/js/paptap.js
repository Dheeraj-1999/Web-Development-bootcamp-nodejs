// var CrBwDist = 100
// for(var i=0; i<1000; i+=100) { // i down circles 
//     for(var j=0; j<1000; j+=100) { // j right side circles
//         // var myCircle = new Path.Circle(new Point((j*CrBwDist)+(10*j), (i*CrBwDist)+(10*i)), 10);
//         
//         // myCircle.fillColor = 'white'   
//     }



// Create a centered text item at the center of the view:
// var text = new PointText({
// 	point: view.center,
// 	content: 'Click here to focus and then press some keys.',
// 	justification: 'center',
// 	fontSize: 15
// });

colors = ["red", "blue", "yellow", "green", "purple", "rgb(255, 0, 200)", "rgb(0, 100, 25)", "rgb(25, 0, 100)", "rgb(0, 25, 100)", "rgb(25, 25, 25)", "rgb(20, 20, 200)", "rgb(200, 20, 20)"
, "rgb(100, 100, 200)", "rgb(250, 150, 150)", "rgb(200, 250, 200)", "rgb(165, 189, 5)", "rgb(54, 0, 65)", "rgb(98, 189, 255)", "rgb(0, 78, 65)", "rgb(6, 89, 4)",
 "rgb(32, 56, 121)", "rgb(255, 65, 135)", "rgb(86, 5, 6)", "rgb(99, 165, 3)", "rgb(220, 89, 65)", "rgb(165, 42, 42)", "", "", "", "", "", "", "", "", 
"", "", "", "", "", "", ""
]

keyData = {
    a: {
        color:colors[0],
        sound: new Howl ( {
            src: ["assets/sounds/bubbles.mp3"]
        })
    },
    b: {
        color:colors[6],
        sound: new Howl ( {
            src:["assets/sounds/clay.mp3"]
        })
    },
    c: {
        color:colors[1],
        sound: new Howl ( {
            src:["assets/sounds/confetti.mp3"]
        })
    },
    d: {
        color:colors[2],
        sound: new Howl ( {
            src:["assets/sounds/corona.mp3"]
        })
    },
    e: {
        color:colors[3],
        sound: new Howl ( {
            src:["assets/sounds/dotted-spiral.mp3"]
        })
    },
    f: {
        color:colors[4],
        sound: new Howl ( {
            src:["assets/sounds/flash-1.mp3"]
        })
    },
    g: {
        color:colors[5],
        sound: new Howl ( {
            src:["assets/sounds/flash-2.mp3"]
        })
    },
    // g: {
    //     color:colors[6]
    //     sound: new Howl ( {
    //         urls:["assets/sounds/.mp3"]
    //     })
    // },
    h: {
        color:colors[7],
        sound: new Howl ( {
            src:["assets/sounds/flash-3.mp3"]
        })
    },
    i: {
        color:colors[8],
        sound: new Howl ( {
            src:["assets/sounds/glimmer.mp3"]
        })
    },
    j: {
        color:colors[9],
        sound: new Howl ( {
            src:["assets/sounds/moon.mp3"]
        })
    },
    k: {
        color:colors[10],
        sound: new Howl ( {
            src:["assets/sounds/pinwheel.mp3"]
        })
    },
    l: {
        color:colors[11],
        sound: new Howl ( {
            src:["assets/sounds/piston-1.mp3"]
        })
    },
    m: {
        color:colors[12],
        sound: new Howl ( {
            src:["assets/sounds/piston-2.mp3"]
        })
    },
    n: {
        color:colors[13],
        sound: new Howl ( {
            src:["assets/sounds/piston-3.mp3"]
        })
    },
    o: {
        color:colors[14],
        sound: new Howl ( {
            src:["assets/sounds/prism-1.mp3"]
        })
    },
    p: {
        color:colors[15],
        sound: new Howl ( {
            src:["assets/sounds/prism-2.mp3"]
        })
    },
    q: {
        color:colors[16],
        sound: new Howl ( {
            src:["assets/sounds/prism-3.mp3"]
        })
    },
    r: {
        color:colors[17],
        sound: new Howl ( {
            src:["assets/sounds/splits.mp3"]
        })
    },
    s: {
        color:colors[18],
        sound: new Howl ( {
            src:["assets/sounds/squiggle.mp3"]
        })
    },
    t: {
        color:colors[19],
        sound: new Howl ( {
            src:["assets/sounds/strike.mp3"]
        })
    },
    u: {
        color:colors[20],
        sound: new Howl ( {
            src:["assets/sounds/suspension.mp3"]
        })
    },
    v: {
        color:colors[21],
        sound: new Howl ( {
            src:["assets/sounds/timer.mp3"]
        })
    },
    w: {
        color:colors[22],
        sound: new Howl ( {
            src:["assets/sounds/ufo.mp3"]
        })
    },
    x: {
        color:colors[23],
        sound: new Howl ( {
            src:["assets/sounds/veil.mp3"]
        })
    },
    y: {
        color:colors[24],
        sound: new Howl ( {
            src:["assets/sounds/wipe.mp3"]
        })
    },
    z: {
        color:colors[25],
        sound: new Howl ( {
            src:["assets/sounds/zig-zag.mp3"]
        })
    },
    1: {
        color:colors[26],
        sound: new Howl ( {
            src:["assets/sounds/squiggle.mp3"]
        })
    },
}


circles = []
function onKeyDown(event) {
	// When a key is pressed, set the content of the text item:
    // sound.play();
    
    
    var circle = new Path.Circle(new Point(Math.random()*1373, Math.random()*674), Math.random()*550);
    
    if(keyData[event.key]) {
        circle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
    } else {
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        circle.fillColor = "rgb(" + r + ", " + g + ", " + b + ")";
        keyData[1].sound.play();
    }
    circles.push(circle);
    
}

function onFrame(event) {
    for(var i=0; i<circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
        if(circles[i].area < 1){
            circles[i].remove(); // remove the circle from the canvas
            circles.splice(i, 1); // remove the circle from the array
            i--; // decrement i so that the loop doesn't skip a circle because of .splice()
            // console.log(circles, "removed");
        }
    }
    
}

var sound = new Howl({
    src: ["assets/sounds/bubbles.mp3", 'assets/sounds/clay.mp3']
  }); 

// function onKeyUp(event) {
//     // When a key is released, set the content of the text item:
//     new Path.Circle(new Point(50, 50), 51).fillColor = "black";
//     new Path.Circle(new Point(50, 50), 2).fillColor = "white";
//     new Path.Circle(new Point(50, 50), 2).fillColor = "blacK";
// }