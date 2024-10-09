// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameScreen from './components/GameScreen/GameScreen';
import MobileScreen from './components/MobileScreen/MobileScreen';
import './App.css';

const questions = [
  {
      question: "What is the capital of France?",
      options: ["A. Berlin", "B. Paris", "C. Madrid", "D. Rome"],
      answer: "B",
      OptionColor : "button button-option-a"
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Saturn"],
      answer: "B",
      OptionColor : "button button-option-b"
  },
  {
      question: "What is the largest mammal in the world?",
      options: ["A. Elephant", "B. Blue Whale", "C. Giraffe", "D. Great White Shark"],
      answer: "B",
      OptionColor : "button button-option-c"
  },
  {
      question: "What is the currency of Japan?",
      options: ["A. Yen", "B. Dollar", "C. Euro", "D. Won"],
      answer: "A",
      OptionColor : "button button-option-d"
  },
  {
      question: "Which gas is essential for human respiration?",
      options: ["A. Carbon Dioxide", "B. Oxygen", "C. Nitrogen", "D. Hydrogen"],
      answer: "B",
      OptionColor : "button button-option-e"
  }
];

const App = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleMobileView = (name) => {
        setPlayerName(name);
        setIsMobile(true);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    return (
        <div>
            <Header />
            {isMobile ? (
                <MobileScreen 
                    question={questions[currentQuestionIndex]}
                    playerName={playerName}
                    handleNextQuestion={handleNextQuestion}
                />
            ) : (
                <GameScreen 
                    question={questions[currentQuestionIndex]} 
                    handleMobileView={handleMobileView} 
                />
            )}
        </div>
    );
};

export default App;







// import React, { useState } from 'react';
// import Header from './components/Header';
// import GameScreen from './components/GameScreen';
// import MobileScreen from './components/MobileScreen';
// import Timer from './components/Timer';
// import Scoreboard from './components/Scoreboard';
// import Feedback from './components/Feedback';
// import GameOver from './components/GameOver';
// import QRCodeDisplay from './components/QRCodeDisplay';
// import './App.css';

// const questions = [
//   { text: 'What is the capital of France?', options: ['A) Berlin', 'B) Madrid', 'C) Paris', 'D) Rome'], answer: 'C) Paris' },
//   // Add more questions as needed
// ];

// function App() {
//   const [players, setPlayers] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(false);
//   const [feedback, setFeedback] = useState("");

//   const addPlayer = (name) => {
//     setPlayers(prev => [...prev, { name, score: 0 }]);
//   };

//   const handleAnswerSelected = (answer) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (answer === currentQuestion.answer) {
//       setFeedback("Correct Answer!");
//       setScore(score + 1);
//       setTimeout(() => {
//         setFeedback("");
//         setCurrentQuestionIndex(prev => prev + 1);
//       }, 2000);
//     } else {
//       setFeedback("Wrong Answer!");
//       setTimeout(() => setFeedback(""), 2000);
//     }

//     // Check if game is over
//     if (currentQuestionIndex === questions.length - 1) {
//       setGameOver(true);
//     }
//   };

//   const restartGame = () => {
//     setPlayers([]);
//     setScore(0);
//     setCurrentQuestionIndex(0);
//     setGameOver(false);
//     setFeedback("");
//   };

//   return (
//     <div className="App">
//       <Header />
//       {!gameOver ? (
//         <>
//           <QRCodeDisplay value="http://your-app-url.com" />
//           <Timer duration={30} onTimeUp={() => setGameOver(true)} />
//           <Scoreboard players={players} />
//           <Feedback message={feedback} />
//           <GameScreen 
//             question={questions[currentQuestionIndex]} 
//             onAnswerSelected={handleAnswerSelected} 
//           />
//           <MobileScreen 
//             addPlayer={addPlayer} 
//             question={questions[currentQuestionIndex]} 
//             onAnswerSelected={handleAnswerSelected} 
//           />
//         </>
//       ) : (
//         <GameOver score={score} onRestart={restartGame} />
//       )}
//     </div>
//   );
// }

// export default App;
