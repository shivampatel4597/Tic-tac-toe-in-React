import React, { useState } from 'react'
import  './game_ui.css'
import Square from './Square'

const Game = () => {

  const [arr, setArr] = useState(Array(9).fill(null))
// check turn x or O
const [isXTurn, setIsXTurn] = useState(true);

const checkWinner = ()=>{
  const winner = [
    [0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ]

  for(let logic of winner){
    const [a,b,c] = logic
  if(arr[a]!==null && arr[a]=== arr[b] && arr[a] === arr[c]){
   return arr[a];
  }
  if (arr.every(square => square !== null)) {
    return "Draw";
  }


  }
  return null;
}

const isWinner = checkWinner();

const handleClick=(index)=>{
 console.log(index)

const copy = [...arr];
copy[index] = isXTurn ? "X":"O"
setArr(copy)
setIsXTurn(!isXTurn);
}


const playAgain = ()=>{
  setArr(Array(9).fill(null))
}


  return (
  
    <div className='dov'>
    
      {
     
isWinner ?<div className='isWin'><h1>{isWinner} won the game</h1><button className="playbtn" onClick={playAgain}>Play again</button></div>:(
  <>
  <h1 className='ah' >Lets play the Tic-tac-toe</h1>
<div className='board-container'>
 <div className='board-row'> <Square onClick={()=>handleClick(0)} value={arr[0]}/> <Square onClick={()=>handleClick(1)}  value={arr[1]}/> <Square onClick={()=>handleClick(2)}  value={arr[2]}/></div>
 <div className='board-row'><Square onClick={()=>handleClick(3)}  value={arr[3]}/> <Square onClick={()=>handleClick(4)}  value={arr[4]}/> <Square onClick={()=>handleClick(5)}  value={arr[5]}/></div>
 <div className='board-row'> <Square onClick={()=>handleClick(6)}  value={arr[6]}/> <Square onClick={()=>handleClick(7)}  value={arr[7]}/><Square onClick={()=>handleClick(8)}  value={arr[8]}/></div>

</div>
<button onClick={playAgain} className="resetbtn">Reset</button>
</>
)
   
 
  } </div>)  

}

export default Game;