
let gameState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    // Maybe a current Player?
    // A game status?? 'isPlaying' or 'over'
    // Any other data your game logic depends on?
  };
  
  
  // ### Make references to the DOM elements you want to click on
  
  // - Remember the concept of event delegation, you only need to put event listeners on parent elements.
  
  board.addEventListener("click", function (event) {
    // Figure out how to get the coordinates off event object (e.target.value)
    // Use those coordinates to reference indexes in our gameState.board
    // Set the position in our board to the current player
  });
  
  
  // ### Rendering the current state of the game information to the DOM
  
  // - Be able to write functions which will loop over your board in state, and reflect the data acordingly to the page
  
  function renderGame() {
    // Call this function after you've changed your state values
    // Make references to DOM elements, and set the innerText,
    // or innerHTML to reflect our gameState.board
  }
  
  
  // - Reference the demo going over editing state, and rendering the board to the DOM -> [Loop Demo][loopdemo]
  
  // ### What other functions may you need?
  
  js
  function switchPlayer() {
    // ???
  }
  function checkWin() {
    // Maybe this calls other helper functions?
    // checkRow()
    // checkColumn()
    // checkDiagonals()
  }
  
  
  // ### What order do those functions need to execute in?
  
  // - Order of operations is very important! Think about the flow of your data, the game loop, and your user story!
  
  // <hr/>
  