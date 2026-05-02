import './App.css'
import {useState} from "react";
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { FaHandSpock } from "react-icons/fa";
import { FaHandLizard } from "react-icons/fa";
import clsx from "clsx";

function App() {
    const [result, setResult] = useState("");
    const [computerChoice, setComputerChoice] = useState("");

    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    const winOptions: Record<string, string[]> = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['paper', 'spock'],
        spock: ['scissors', 'rock']
    };

    function handleChoice(human: string): void {
        const computer = options[Math.floor(Math.random() * options.length)];

        if (human === computer) {
            setResult('tie');
            setComputerChoice(computer);
        } else if (winOptions[human].includes(computer)) {
            setResult('win');
            setComputerChoice(computer);
        } else {
            setResult('loss')
            setComputerChoice(computer);
        }
    }

  return (
    <div className="container">
        <div className="buttons">
          <button onClick={() => handleChoice("rock")}><FaHandRock /> Rock</button>
          <button onClick={() => handleChoice("paper")}><FaHandPaper /> Paper</button>
          <button onClick={() => handleChoice("scissors")}><FaHandScissors /> Scissors</button>
          <button onClick={() => handleChoice("lizard")}><FaHandLizard /> Lizard</button>
          <button onClick={() => handleChoice("spock")}><FaHandSpock /> Spock</button>
        </div>

        {computerChoice && (
            <div className="output">
                <p className="computer-choice">The computer choose: {computerChoice}</p>
                <h2 className={clsx('result', {
                    'win': result === 'win',
                    'loss': result === 'loss',
                    'tie': result === 'tie'
                })}>
                    {result}
                </h2>

            </div>
        )}
    </div>
  );
}

export default App
