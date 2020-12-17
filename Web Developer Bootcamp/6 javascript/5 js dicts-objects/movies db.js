var movies = [
    {
        title: "hum aap ke hain kon",
        rating: 5,
        hasWatched:true
    },
    {
        title:"chal mera putt",
        rating:9,
        hasWatched:true
    },
    {
        title:"ludo",
        rating:8,
        hasWatched:false
    }
]

for(var i=0; i<movies.length; i++) {
    str = "you have ";
    if(movies[i]["hasWatched"] == false) {
        str += "not "
    }
    str += "watched \"" + movies[i]["title"] + "\" - " + movies[i]["rating"] + " stars";
    console.log(str);
}