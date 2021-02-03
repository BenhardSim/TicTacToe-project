let board = [
  ['','',''],
  ['','',''],
  ['','','']
]

let checkBoard = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
]

let longMatch = 0;
let game = 'start'
let winner = null;
let players = ['X','O']
let player = players[0];

let resetButton = document.querySelector("button");
resetButton.innerHTML = 'Reset The game';
resetButton.style.backgroundColor = 'red';

function setup() {
  createCanvas(400, 400);
  createP('TicTacToe GAME')
  createP('Created By : Benhard Simanullang')
}

function switchPlayer(){
  if(player == players[0]){
      player = players[1]
  }else{
    player = players[0]
  }
}
function currentPlayer(){
  return player
}

function draw() {
  background(220);
  let w = width/3
  let h = height/3
  strokeWeight(4)
  line(w,0,w,height)
  line(w*2,0,w*2,height)
  line(0,h,width,h)
  line(0,h*2,width,h*2)
  for(let i = 0 ;i<3;i++){
    for(let j = 0;j<3;j++){
      let xr = w/4
      let x = w*i + w/2
      let y = h*j + w/2 
      // player O
      if(board[i][j] == players[1]){
        fill(20,100,92)
        circle(w*i + w/2,h*j + w/2,80)
        checkBoard[i][j] = 'Used'
      }
      // player X
       else if(board[i][j] == players[0]){
        noFill()
        line(x - xr,y - xr , x + xr,y + xr)
        line(x - xr, y + xr,x + xr ,y - xr)
        checkBoard[i][j] = 'Used'
      }
    }
  }
  CheckWinner()


}
/*

  00 10 20
  01 11 21
  02 12 22
  
*/
function mousePressed(){
  // tabel 1 [0][0]
  let w = width/3
  let h = height/3
  if(mouseX<w && mouseX > 0 && mouseY < h && mouseY > 0 && checkBoard[0][0] != 'Used'){
    board[0][0] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 2 [1][0]
  else if(mouseX<w*2 && mouseX > w && mouseY < h && mouseY > 0 && checkBoard[1][0] != 'Used'){
    board[1][0] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 3 [2][0]
  else if(mouseX<w*3 && mouseX > w*2 && mouseY < h && mouseY > 0 && checkBoard[2][0] != 'Used'){
    board[2][0] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 4 [0][1]
  else if(mouseX<w && mouseX > 0 && mouseY < h*2 && mouseY > h && checkBoard[0][1] != 'Used'){
    board[0][1] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 5 [1][1]
  else if(mouseX<w*2 && mouseX > w && mouseY < h*2 && mouseY > h && checkBoard[1][1] != 'Used'){
    board[1][1] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 6 [2][1]
  else if(mouseX<w*3 && mouseX > w*2 && mouseY < h*2 && mouseY > h && checkBoard[2][1] != 'Used'){
    board[2][1] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 7 [0][2]
  else if(mouseX<w && mouseX > 0 && mouseY < h*3 && mouseY > h*2 && checkBoard[0][2] != 'Used'){
    board[0][2] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 8 [1][2]
  else if(mouseX<w*2 && mouseX > w && mouseY < h*3 && mouseY > h*2 && checkBoard[1][2] != 'Used'){
    board[1][2] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  // tabel 9 [2][2]
  else if(mouseX<w*3 && mouseX > w*2 && mouseY < h*3 && mouseY > h*2 && checkBoard[2][2] != 'Used'){
    board[2][2] = currentPlayer()
    longMatch++
    switchPlayer()
  }
  else if(game == 'start'){
    createP('Try another Spot !!')
  }

}

/*

  00 10 20
  01 11 21
  02 12 22
  
*/
// Check Winner 
function CheckWinner(){
  // player X
  // 00 10 20
  if(board[0][0] === players[0] && board[1][0] === players[0] && board[2][0] === players[0]){
   console.log(players[0] + ' WIN !!!')
   createP('X WIN !!')
   game = 'end'
   noLoop()
  }
  // 01 11 21
  else if(board[0][1] === players[0] && board[1][1] === players[0] && board[2][1] === players[0]){
    console.log(players[0] + ' WIN !!!')
    game = 'end'
    createP('X WIN !!')
    noLoop()
  }
  // 02 12 22
  else if(board[0][2] === players[0] && board[1][2] === players[0] && board[2][2] === players[0]){
    console.log(players[0] + ' WIN !!!')
    game = 'end'
    winner = players[0]
    createP('X WIN !!')
    noLoop()
  }
  // 00 01 02
  else if(board[0][0] === players[0] && board[0][1] === players[0] && board[0][2] === players[0]){
    console.log(players[0] + ' WIN !!!')
    createP(player[0],' WIN !!')
    game = 'end'
    winner = players[0]
    createP('X WIN !!')
    noLoop()
  }
  // 10 11 12
  else if(board[1][0] === players[0] && board[1][1] === players[0] && board[1][2] === players[0]){
    console.log(players[0] + ' WIN !!!')
    game = 'end'
    winner = players[0]
    createP('X WIN !!')
    noLoop()
  }
  // 20 21 22
  else if(board[2][0] === players[0] && board[2][1] === players[0] && board[2][2] === players[0]){
    console.log(players[0] + ' WIN !!!')
    game = 'end'
    winner = players[0]
    createP('X WIN !!')
    noLoop()
  }
  // 00 11 22
  else if(board[0][0] === players[0] && board[1][1] === players[0] && board[2][2] === players[0]){
    console.log(players[0] + ' WIN !!!')
    game = 'end'
    winner = players[0]
    createP('X WIN !!')
    noLoop()
  }
  // 20 11 02
  else if(board[2][0] === players[0] && board[1][1] === players[0] && board[0][2] === players[0]){
    console.log(players[0] + ' WIN !!!')
    game = 'end'
    winner = players[0]
    createP('X WIN !!')
    noLoop()
  }

    // player O
    // 00 10 20
  if(board[0][0] === players[1] && board[1][0] === players[1] && board[2][0] === players[1]){
    console.log(players[1] + ' WIN !!!')
    game = 'end'
    winner = players[1]
    createP('O WIN !!')
    noLoop()
   }
   // 01 11 21
   else if(board[0][1] === players[1] && board[1][1] === players[1] && board[2][1] === players[1]){
     console.log(players[1] + ' WIN !!!')
     game = 'end'
     winner = players[1]
     createP('O WIN !!')
     noLoop()
   }
   // 02 12 22
   else if(board[0][2] === players[1] && board[1][2] === players[1] && board[2][2] === players[1]){
     console.log(players[1] + ' WIN !!!')
     game = 'end'
     winner = players[1]
     createP('O WIN !!')
     noLoop()
   }
   // 00 01 02
   else if(board[0][0] === players[1] && board[0][1] === players[1] && board[0][2] === players[1]){
     console.log(players[1] + ' WIN !!!')
     game = 'end'
     winner = players[1]
     createP('O WIN !!')
     noLoop()
   }
   // 10 11 12
   else if(board[1][0] === players[1] && board[1][1] === players[1] && board[1][2] === players[1]){
     console.log(players[1] + ' WIN !!!')
     game = 'end'
     winner = players[1]
     createP('O WIN !!')
     noLoop()
   }
   // 20 21 22
   else if(board[2][0] === players[1] && board[2][1] === players[1] && board[2][2] === players[1]){
     console.log(players[1] + ' WIN !!!')
     game = 'end'
     winner = players[1]
     createP('O WIN !!')
     noLoop()
   }
   // 00 11 22
   else if(board[0][0] === players[1] && board[1][1] === players[1] && board[2][2] === players[1]){
     console.log(players[1] + ' WIN !!!')
     game = 'end'
     winner = players[1]
     createP('O WIN !!')
     noLoop()
   }
   // 20 11 02
   else if(board[2][0] === players[1] && board[1][1] === players[1] && board[0][2] === players[1]){
     console.log(players[1] + ' WIN !!!')
     game = 'end'
     winner = players[1]
     createP('O WIN !!')
     noLoop()
   }
   else if(longMatch === 9 && winner === null){
     console.log('DRAW !!!!')
     game = 'end'
     createP('DRAW !!')
     noLoop()
   }
}



