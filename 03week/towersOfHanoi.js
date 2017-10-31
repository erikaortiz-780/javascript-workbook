'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
//move last piece of start stack to last piece of end stack; push pop method
const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop());
}
//check for illegal move
const isLegal = (startStack, endStack) => {
//using the length of the array to find the last item by subtracting 1
//also got confused so put it in a variable
  let startMove = stacks[startStack][stacks[startStack].length - 1]
  let endMove = stacks[endStack][stacks[endStack].length - 1]
  //if there is nothing in the end stack array, allow move; .length method
  if (stacks[endStack].length === 0) {
    return true;
    //If the last item in the start stack is greater then the end stack then you can't do that
  } else if(startMove > endMove) {
    console.log(`Can't do that!`);
    return false;
    //if not legal then allow move
  } else {
    return true;
  }
}
//reset the game to this object with these arrays
const gameReset = () => {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

const checkForWin = () => {
  //if the length of the last stack is equal to 4 then we have a winner using length method ; and reset game by calling function
  if(stacks.c.length === 4) {
    console.log(`Winner! Play again!`);
    gameReset();
  } else {
    console.log(`Next Move`);
    return false;
  }
}
//put it all together; if function calling all other functions written above
const towersOfHanoi = (startStack, endStack) => {
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  }
  else {
    return false;
  }
}


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();


//Tests

//If all disks are placed in the last stack the player wins,
//if I ran towersOfHanoi('a','b') and the stacks looked like [a[],b[],c[4,3,2,1]]
//the player would be alerted 'You Win!'

//If a larger disk is placed on top of a smaller disk return error
//if i ran towersofHanoi('a','b') and the stacks looked like [a[4,3], b[1,2],c[]]
//revert move
