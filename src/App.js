import './App.css';
import { useState } from 'react';
import Diceimage1 from './image/Dice1.png';
import Diceimage2 from './image/Dice2.png';
import Diceimage3 from './image/Dice3.png';
import Diceimage4 from './image/Dice4.png';
import Diceimage5 from './image/Dice5.png';
import Diceimage6 from './image/Dice6.png';
function App() {
  var diceimages = [Diceimage1, Diceimage2, Diceimage3, Diceimage4, Diceimage5, Diceimage6];
  const [image1, setImage1] = useState(diceimages[0]);
  const [image2, setImage2] = useState(diceimages[1]);
  const diceRoll=() => {
    var num1 = Math.floor(Math.random() *6);
    var num2 = Math.floor(Math.random() *6);
    setImage1(diceimages[num1]);
    setImage2(diceimages[num2]);
  }
  return (
    <div className="App">
      <center>
        <h1>Welcome to Ultimate Dice Roll</h1>
        <div className='firstclass'>
            <img className='squ' src={image1}></img>
            <div style={{display: 'inline-block', width:'5px'}}></div>
            <img className='squ' src={image2}></img>
        </div>
        <button type="button" class="btn btn-outline-danger" onClick={diceRoll}>Roll Dice</button>
      </center>
    </div>
  );
}

export default App;
