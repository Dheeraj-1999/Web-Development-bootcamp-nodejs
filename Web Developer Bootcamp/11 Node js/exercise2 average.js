function average(scores) {
    var sumA = 0;
    // for(var i=0; i<scores.length(); i++) {
    //     sumA += scores[i];
    // }   
    scores.forEach(score => {
        sumA += score;
    });
    return(Math.round(sumA/scores.length));
}

var scores = [90, 89, 98, 100, 100, 86, 94];
console.log(average(scores));