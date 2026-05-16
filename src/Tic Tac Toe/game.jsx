import React, { useState } from "react";
import circleIcon from "../assets/circle.png"; // O Player icon // O Player icon
import crossIcon from "../assets/cross.png"; // X Player icon // X Player icon

// Array representing the 9 squares of the tic-tac-toe grid
// Array representing the 9 squares of the tic-tac-toe grid
let boardData = ["", "", "", "", "", "", "", "", ""];

const Game = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        // Handle user interaction with grid boxes
        // Handle user interaction with grid boxes
        if (lock || boardData[num] !== "") {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="${crossIcon}" alt="X" style="width: 60%; height: 60%;" />`;
            boardData[num] = "X";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src="${circleIcon}" alt="O" style="width: 60%; height: 60%;" />`;
            boardData[num] = "O";
            setCount(count + 1);
        }
        checkWin();
    };

    const checkWin = () => {
        // Check all possible winning combinations
        // Check all possible winning combinations
        if (boardData[0] === boardData[1] && boardData[1] === boardData[2] && boardData[2] !== "") won(boardData[0]);
        else if (boardData[3] === boardData[4] && boardData[4] === boardData[5] && boardData[5] !== "") won(boardData[3]);
        else if (boardData[6] === boardData[7] && boardData[7] === boardData[8] && boardData[8] !== "") won(boardData[6]);
        else if (boardData[0] === boardData[3] && boardData[3] === boardData[6] && boardData[6] !== "") won(boardData[0]);
        else if (boardData[1] === boardData[4] && boardData[4] === boardData[7] && boardData[7] !== "") won(boardData[1]);
        else if (boardData[2] === boardData[5] && boardData[5] === boardData[8] && boardData[8] !== "") won(boardData[2]);
        else if (boardData[0] === boardData[4] && boardData[4] === boardData[8] && boardData[8] !== "") won(boardData[0]);
        else if (boardData[2] === boardData[4] && boardData[4] === boardData[6] && boardData[6] !== "") won(boardData[2]);
        else if (count === 8) {
            setLock(true);
            setTimeout(() => {
                alert("It's a draw! Well played.");
            }, 600);
        }
    };

    const won = (winner) => {
        setLock(true);
        setTimeout(() => {
            alert(`${winner} wins!`);
        }, 600);
    };

    const reset = () => {
        // Reset game state and UI
        // Reset game state and UI
        setLock(false);
        boardData = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        document.querySelectorAll(".box").forEach((box) => {
            box.innerHTML = "";
        });
    };

    return (
        <div className="game-container">
            <h1 className="title">Tic Tac Toe</h1>
            {/* The 3x3 Game Board */}
            {/* The 3x3 Game Board */}

            <div className="board">
                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 0)}></div>
                    <div className="box" onClick={(e) => toggle(e, 1)}></div>
                    <div className="box" onClick={(e) => toggle(e, 2)}></div>
                </div>

                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 3)}></div>
                    <div className="box" onClick={(e) => toggle(e, 4)}></div>
                    <div className="box" onClick={(e) => toggle(e, 5)}></div>
                </div>

                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 6)}></div>
                    <div className="box" onClick={(e) => toggle(e, 7)}></div>
                    <div className="box" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>

            <button className="reset-btn" onClick={reset}>Reset Game</button>
        </div>
    );
};

export default Game;