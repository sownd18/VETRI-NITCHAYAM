import React, { useState } from "react";

function DiceChallenge() {
  const [p1, setP1] = useState(1);
  const [p2, setP2] = useState(1);
  const [result, setResult] = useState("Let's Play!");

  const rollDice = () => {
    const r1 = Math.floor(Math.random() * 6)+1;
    const r2 = Math.floor(Math.random() * 6)+1;
    setP1(r1);
    setP2(r2);

    setResult(
      r1 > r2 ? "🔥 Player 1 Wins!" : r2 > r1 ? "💥 Player 2 Wins!" : "🚩 Draw!"
    );
  };

  return (
    <div style={{ textAlign: "center",color:"white",backgroundColor:"black",height:"100vh" }}>
      <h1>{result}</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "100px",
          marginTop: "40px",
        }}
      >
        <div>
          <p>Player 1</p>
          <img src={`./images/dice${p1}.png`} alt="dice" width="100" />
        </div>
        <div>
          <p>Player 2</p>
          <img src={`./images/dice${p2}.png`} alt="dice" width="100" />
        </div>
      </div>

      <button
        onClick={rollDice}
        style={{
          marginTop: "40px",
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Roll Dice
      </button>
    </div>
  );
}

export default DiceChallenge;
