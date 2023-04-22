// index.js - basic JS actions (DOM). 
// component.js - player actions (create, moving) / enemy actions (create).
// game.js - Game actions (start, stop, update Canvas (animates the game),
// update Enemies, check if Game Over). 


// Canvas Initialization
const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

const player = new Component((canvas.width/2) -35, canvas.height - 80, 70, 80, true, null, ctx);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }; 

  function startGame() {
    // Create a Game Board
    const game = new Game(ctx, canvas.width, canvas.height, player);
    // Call a function of Game Board's called Start.
    game.start();
  }

  // Add Event Listeners, in order to JS do something with keyboard Keys
  document.addEventListener('keydown', (e)=>{
    switch (e.code){
      case 'ArrowLeft':
      player.speedX -=1;
      break;

      case 'ArrowRight': 
      player.speedX +=1; 
      break; 
    }
  });

  document.addEventListener('keyup', ()=>{
    player.speedX = 0; 
  })
}
