let userName = prompt("Can you tell me your name?")

if (userName == "Hexx" | "Kassie" | "Josh" | "Joshua") {
    document.write("Thanks for checking in, " + userName + "!");
} else if (userName == "no") {
    document.write("Smart. Trust no one.")
} else {
    document.write("Now listen to me, this is very important, " + userName + ".");
}