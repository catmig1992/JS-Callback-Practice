const inventory = newInventory();
move(inventory).to(0, 0);

//When we are finished, the player should be able to move the character by pressing the arrow keys.
// const character = newImage('assets/green-character/static.gif')
// move(character).to(100, 250)

//Since the direction of our character will change, we will need to track it with a variable.
// const character = newImage("assets/green-character/static.gif");
// let direction = null;
// move(character).to(100, 250);

//It will also be helpful to keep track of the character's current position with the following variables:
// const character = newImage("assets/green-character/static.gif");
// let direction = null;
// let x = 100;
// let y = 250;
// move(character).to(100, 250);
//If the character is moving west, then x (the distance between the character and the left side of the screen) should decrease:
// let direction = null;
// let x = 100;
// let y = 250;

// if (direction === "west") {
//   x = x - 1;
// }

// let direction = null;
// let x = 100;
// let y = 250;

// if (direction === "west") {
//   x = x - 1;
// }
// if (direction === "north") {
//   y = y + 1;
// }
// if (direction === "east") {
//   x = x + 1;
// }
// if (direction === "south") {
//   y = y - 1;
// }
// character.style.left = x + "px";
// character.style.bottom = y + "px";

//The setInterval function takes a callback function as its first argument and a certain number of milliseconds as its second argument. It then calls the callback repeatedly, waiting the specified number of milliseconds between each call.
//To use it, let's wrap the logic we want to run repeatedly in a function:

// const character = newImage("assets/green-character/static.gif");
// let direction = null;
// let x = 100;
// let y = 250;

// function moveCharacter() {
//   if (direction === "west") {
//     x = x - 1;
//   }
//   if (direction === "north") {
//     y = y + 1;
//   }
//   if (direction === "east") {
//     x = x + 1;
//   }
//   if (direction === "south") {
//     y = y - 1;
//   }
//   character.style.left = x + "px";
//   character.style.bottom = y + "px";
// }

// We then will pass that function to setInterval:
// setInterval(moveCharacter, 1);

//Rather than defining moveCharacter and referencing it by name to pass it to setInterval, we could define the function inline similarly to how we have passed addEventListener callback functions:

// setInterval(function () {
//   if (direction === "west") {
//     x = x - 1;
//   }
//   if (direction === "north") {
//     y = y + 1;
//   }
//   if (direction === "east") {
//     x = x + 1;
//   }
//   if (direction === "south") {
//     y = y - 1;
//   }
//   character.style.left = x + "px";
//   character.style.bottom = y + "px";
// }, 1);

//The addEventListener receives the inline function we are passing, calls it whenever the event we specify fires, and passes in the e object as an argument.
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     direction = "west";
//   }
//   if (e.key === "ArrowUp") {
//     direction = "north";
//   }
//   if (e.key === "ArrowRight") {
//     direction = "east";
//   }
//   if (e.key === "ArrowDown") {
//     direction = "south";
//   }
// });

//The keydown event fires multiple times as long as a user holds down a key. To make our logic simpler, we will use this line to skip any repeat events.
// document.addEventListener("keydown", function (e) {
//   if (e.repeat) return;

//   if (e.key === "ArrowLeft") {
//     direction = "west";
//   }
//   if (e.key === "ArrowUp") {
//     direction = "north";
//   }
//   if (e.key === "ArrowRight") {
//     direction = "east";
//   }
//   if (e.key === "ArrowDown") {
//     direction = "south";
//   }
// });

//We need one more event listener to stop the character when the user releases a key:

// document.addEventListener("keyup", function (e) {
//   direction = null;
// });

//se the withArrowKeys function:
// const character = newImage("assets/green-character/static.gif");
// move(character).withArrowKeys(100, 250);

//Try using this logic with another image, like the tree:
// move(newImage("assets/tree.png")).withArrowKeys(200, 450);


//The last addition to our game is to modify the character's image when it changes direction so it appears to walk.
//We can do this conditionally based on the direction variable defined earlier:
// const character = newImage("assets/green-character/static.gif");

// if (direction === null) {
//   character.src = "assets/green-character/static.gif";
// }
// if (direction === "west") {
//   character.src = "assets/green-character/west.gif";
// }
// if (direction === "north") {
//   character.src = "assets/green-character/north.gif";
// }
// if (direction === "east") {
//   character.src = "assets/green-character/east.gif";
// }
// if (direction === "south") {
//   character.src = "assets/green-character/south.gif";
// }

// move(character).withArrowKeys(100, 250);


//Let's start by wrapping our logic in a function and then passing that function to withArrowKeys:
// const character = newImage("assets/green-character/static.gif");

// function handleDirectionChange() {
//   if (direction === null) {
//     character.src = "assets/green-character/static.gif";
//   }
//   if (direction === "west") {
//     character.src = "assets/green-character/west.gif";
//   }
//   if (direction === "north") {
//     character.src = "assets/green-character/north.gif";
//   }
//   if (direction === "east") {
//     character.src = "assets/green-character/east.gif";
//   }
//   if (direction === "south") {
//     character.src = "assets/green-character/south.gif";
//   }
// }

// move(character).withArrowKeys(100, 250, handleDirectionChange);


//We can also accept it as a parameter:
const character = newImage("assets/green-character/static.gif");

function handleDirectionChange(direction) {
  if (direction === null) {
    character.src = "assets/green-character/static.gif";
  }
  if (direction === "west") {
    character.src = "assets/green-character/west.gif";
  }
  if (direction === "north") {
    character.src = "assets/green-character/north.gif";
  }
  if (direction === "east") {
    character.src = "assets/green-character/east.gif";
  }
  if (direction === "south") {
    character.src = "assets/green-character/south.gif";
  }
}

move(character).withArrowKeys(100, 250, handleDirectionChange);


move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);
