// function move(element) {
//     element.style.position = 'fixed'

//     function moveToCoordinates(left, bottom) {
//         element.style.left = left + 'px'
//         element.style.bottom = bottom + 'px'
//     }

//     return {
//         to: moveToCoordinates
//     }
// }

//First, let's define another function inside of move and attach it to the object we return:
function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  //   function moveWithArrowKeys(left, bottom) {}

  //   return {
  //     to: moveToCoordinates,
  //     withArrowKeys: moveWithArrowKeys,
  //   };
  // }

  //Next, copy the original logic from the index inside of moveWithArrowKeys. Note: We will need to replace character with element in a few places and stop hard-coding the element's starting position:
  // function moveWithArrowKeys(left, bottom) {
  //   let direction = null;
  //   let x = left;
  //   let y = bottom;

  //Next, accept this function as a parameter inside of moveWithArrowKeys:
  function moveWithArrowKeys(left, bottom, callback) {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + "px";
    element.style.bottom = y + "px";

    function moveCharacter() {
      if (direction === "west") {
        x -= 1;
      }
      if (direction === "north") {
        y += 1;
      }
      if (direction === "east") {
        x += 1;
      }
      if (direction === "south") {
        y -= 1;
      }
      element.style.left = x + "px";
      element.style.bottom = y + "px";
    }

    setInterval(moveCharacter, 1);

    //   document.addEventListener("keydown", function (e) {
    //     if (e.repeat) return;

    //     if (e.key === "ArrowLeft") {
    //       direction = "west";
    //     }
    //     if (e.key === "ArrowUp") {
    //       direction = "north";
    //     }
    //     if (e.key === "ArrowRight") {
    //       direction = "east";
    //     }
    //     if (e.key === "ArrowDown") {
    //       direction = "south";
    //     }
    //   });

    //Then, call the callback where we change the direction variable:
    //   document.addEventListener("keyup", function (e) {
    //     direction = null;
    //   });
    // }
    // document.addEventListener('keydown', function(e){
    //     if(e.repeat) return;

    //     if(e.key === 'ArrowLeft'){
    //         direction = 'west'
    //     }
    //     if(e.key === 'ArrowUp'){
    //         direction = 'north'
    //     }
    //     if(e.key === 'ArrowRight'){
    //         direction = 'east'
    //     }
    //     if(e.key === 'ArrowDown'){
    //         direction = 'south'
    //     }
    //     callback()
    // })

    // document.addEventListener('keyup', function(e){
    //     direction = null
    //     callback()
    // })

    //This is because direction still isn't in scope where we define handleDirectionChange. However, direction is in scope where we call handleDirectionChange. Therefore, we can pass it as an argument:
    document.addEventListener("keydown", function (e) {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
        direction = "west";
      }
      if (e.key === "ArrowUp") {
        direction = "north";
      }
      if (e.key === "ArrowRight") {
        direction = "east";
      }
      if (e.key === "ArrowDown") {
        direction = "south";
      }
      callback(direction);
    });

    document.addEventListener("keyup", function (e) {
      direction = null;
      callback(direction);
    });
  }
  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
