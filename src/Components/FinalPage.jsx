import React from "react";
import Card from "./Card";

import "./FinalPage.css";

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  };

  return (
    <Card>
      <h1 className="heading">Vous avez atteint la fin du test, {username}!</h1>

      <h3 className="primary_text">Votre score final est:</h3>

      <h3 className="final_score">{score}</h3>

      <button className="play_again_btn" onClick={handleClick}>
      Refaire le test
      </button>
    </Card>
  );
};

export default FinalPage;
