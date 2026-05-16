import React, { use } from "react";

let data = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

let [count, setCount] = useState(0);
let [lock, setLock] = useState(false);


const toggle = (w,num) => {
    if (lock){
        return;
    }
    if(count % 2 === 0){
        e.target.innerText = `<img src='${cross_icon}' alt="X" />`;
        data[num] = "X";
        setCount(count + 1);
    }
    else {
        e.target.innerText = `<img src='${circle_icon}' alt="O" />`;
        data[num] = "O";
        setCount(count + 1);
    }
    checkWin();
};

const checkWin = () => {
    if(data[0]===data[1] && data[1] === data[2] && data[2] !== ""){
        won(data);
    }
    else if (data[3]===data[4] && data[4] === data[5] && data[5] !== ""){
        won(data);
    }
    else if (data[6]===data[7] && data[7] === data[8] && data[8] !== ""){
        won(data);
    }
    else if (data[0]===data[3] && data[3] === data[6] && data[6] !== ""){
        won(data);
    }
    else if (data[1]===data[4] && data[4] === data[7] && data[7] !== ""){
        won(data);
    }
    else if (data[2]===data[5] && data[5] === data[8] && data[8] !== ""){
        won(data);
    }
    else if (data[0]===data[4] && data[4] === data[8] && data[8] !== ""){
        won(data);
    }
    else if (data[0]===data[1] && data[1] === data[2] && data[2] !== ""){
        won(data);
    }
    else if (data[2]===data[4] && data[4] === data[6] && data[6] !== ""){
        won(data);
    }
    else if (count === 9){
        setLock(true);
        alert("It's a draw!");
    }
}

const won = (winner) => {
    setLock(true);
    alert(`${winner} wins!`);
}

const Game = () => {
    return (
        <>
            <div>
                <h1>Tic Tac Toe in React</h1>
                <button>Reset Game</button>
            </div>
            <div className="container">
                <div className="game-board">
                    <div className="row" onClick={(e) => toggle(e, 0)}></div>
                    <div className="row" onClick={(e) => toggle(e, 1)}></div>
                    <div className="row" onClick={(e) => toggle(e, 2)}></div>
                </div>

                <div className="game-board">
                    <div className="row" onClick={(e) => toggle(e, 3)}></div>
                    <div className="row" onClick={(e) => toggle(e, 4)}></div>
                    <div className="row" onClick={(e) => toggle(e, 5)}></div>
                </div>

                <div className="game-board">
                    <div className="row" onClick={(e) => toggle(e, 6)}></div>
                    <div className="row" onClick={(e) => toggle(e, 7)}></div>
                    <div className="row" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
        </>
    );
};

export default Game;
