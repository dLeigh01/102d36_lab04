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