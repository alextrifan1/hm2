import './App.css'
import {useState} from "react";
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";

function App() {
    const [result, setResult] = useState("");
    const options = ['rock', 'paper', 'scissors'];

    function handleChoice(humanChoice: string): void {
        const computer = options[Math.floor(Math.random() * options.length)];
        if (humanChoice === computer) {
            setResult('You and the machine think alike… unsettling');
        } else if (
            (humanChoice === 'rock' && computer === 'scissors') ||
            (humanChoice === 'paper' && computer === 'rock') ||
            (humanChoice === 'scissors' && computer === 'paper')
        ) {
            setResult('The indomitable human spirit wins against the cold machine')
        } else {
            setResult('Error 404: Human Victory Not Found')
        }
    }

  return (
    <div className="container">
        <div className="buttons">
          <button onClick={() => handleChoice("rock")}><FaHandRock /> Rock</button>
          <button onClick={() => handleChoice("paper")}><FaHandPaper />Paper</button>
          <button onClick={() => handleChoice("scissors")}><FaHandScissors />Scissors</button>
        </div>
        <p className="result">Result: {result}</p>
    </div>
  );
}

export default App
