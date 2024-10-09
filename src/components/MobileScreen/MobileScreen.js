// src/components/MobileScreen.js
import React, { useState } from 'react';

const MobileScreen = ({ question, playerName, handleNextQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');
    const [textColor, setTextColor] = useState('');

    const checkAnswer = () => {
        if (selectedAnswer === question.answer) {
            setMessage(`Congratulations, ${playerName}! Your answer is correct!`);
            setTextColor("message correct-message");
            setTimeout(handleNextQuestion, 2000); // Move to next question after 2 seconds
        } else {
          setTextColor("message wrong-message");
            setMessage(`Sorry, ${playerName}. Your answer is wrong.`);
        }
    };

    return (
        <div className="mobile-screen">
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option, index) => (
                    <li className={question.OptionColor} key={index}>
                        <button className='optons-button' onClick={() => setSelectedAnswer(option.charAt(0))}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
            <button className="button button-submit" onClick={checkAnswer}>Submit Answer</button>
            {message && <p className={textColor}>{message}</p>}
        </div>
    );

};

export default MobileScreen;

