const submitForm = document.querySelector("button");
const anecdoteDiv = document.querySelector(".anecdote");

const script = "I joined " + childName + " while they were " + areaActivity + customActivity;

submitForm.addEventListener("click", () => {
    //get child name and assign to childName
    //get area value -> and then run function that will generate the correct areaActivity message.
    //Get custom sentence about what they were specifically doing in that area and then store as customActivity
    //print scrip to div.anecdote
})


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

if(area == "physical-play") {
    areaActivity = "engaged in physical play.";
}