const script = "I joined " + name + " while they were " + areaActivity;

//Function that gets a keyword from the user input, and then outputs a 
//custom message to area variable.
let areaActivity = "";
if(area == "drama") {
    areaActivity = "engaged in a role play.";
}

if(area == "math-science") {
    areaActivity = "immersed in a game.";
}

if(area == "activity") {
    areaActivity = "working on one of the prepared activities for this week.";
}

if(area == "blocks") {
    areaActivity = "building with blocks.";
}

if(area == "music") {
    areaActivity = "engaged in the music area.";
}

if(area == "art") {
    areaActivity = "crafting in the art area.";
}

if(area == "language") {
    areaActivity = "reading a book.";
}