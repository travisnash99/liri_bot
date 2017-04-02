// Load the NPM Package inquirer
var inquirer = require("inquirer");

    console.log("==============================================");
    console.log("");
    console.log("Welcome to the Dungeon, let's create your profile.");
    console.log("");
    console.log("==============================================");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we ask the Player's Name.
  {
    type: "input",
    message: "What is your name? (not your character's name)",
    name: "playerName"
  },

  // Here we create a Character.
  {
    type: "input",
    message: "What is your character's name?",
    name: "charName"
  },

  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "What race is your character?",
    choices: ["Dragoborn", "Dwarf", "Eladrin", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling"],
    name: "race"
  },

  {
    type: "list",
    message: "What class is your character?",
    choices: ["Barbarian", "Bard", "Druid", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock", "Gunslinger"],
    name: "class"
  },

  {
    type: "input",
    message: "What is your character's bio?",
    name: "bio"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(user) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome " + user.playerName);
    console.log("");
    console.log("==============================================");
    console.log("");
    console.log("Character Information - ");
    console.log("Name: " + user.charName);
    console.log("Race: " + user.race);
    console.log("Class: " + user.class);
    console.log("Bio: " + user.bio);
    console.log("");
    console.log("==============================================");

  // If the user does not confirm, then a message is provided and the program quits.
  }

  else {

    console.log("");
    console.log("");
    console.log("That's okay " + user.playerName + ", come again when you want to play.");
    console.log("");
    console.log("");

  }

});