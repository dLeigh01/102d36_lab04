function getUserName() {
    let userName = prompt("Can you tell me your name?");
    
    if (userName == "Hexx" || userName == "Kassie" || userName == "Josh" || userName == "Joshua") {
        document.write("Thanks for checking in, " + userName + "!");
    } else if (userName == "no" || userName == null) {
        document.write("Smart. Trust no one.");
    } else if (userName == "Nick" || userName == "Nicholas") {
        document.write("Listen, Niko, I know you love the cat but you need to understand what he truly is.");
    } else {
        document.write("Now listen to me, this is very important, " + userName + ".");
    }
}

function askForOpinion() {
    var isHeCute = confirm("Now a more important question, do you believe cats are cute?");
    
    if (isHeCute == false) {
        document.write("Good, you're smart. Smarter than the rest.");
    } if (isHeCute == true){
        let anotherChance = confirm("Are you certain?");
        if (anotherChance == true) {
            document.write("I'm sorry to inform you that you are sorely mistaken.");
        } else {
        document.write("Good, you're smart. Smarter than the rest.");
        }
    }
}
    
function getTime() {
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    
    if (hourNow > 18) {
        greeting = "It is late in the evening, he's probably already destroying everything you own.";
    } else if (hourNow > 12) {
        greeting = "It being only midday, you likely believe you have time to save yourself. You are wrong.";
    } else if (hourNow > 0) {
        greeting = "It's too early to deal with him, and yet, he is there. Watching. Waiting. Planning your demise.";
    } else {
        greeting = "Do you truly believe you are safe?";
    }
    
    document.write(greeting);
}