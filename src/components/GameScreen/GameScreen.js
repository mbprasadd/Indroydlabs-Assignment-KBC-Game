
import React from 'react';
import QRCodeDisplay from '../QRCodeDisplay/QRCodeDisplay';

const GameScreen = ({ question, handleMobileView }) => {
    return (
        <div className="game-screen">
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
            <QRCodeDisplay value="http://yourapp.com" />
            <input
                type="text"
                placeholder="Enter your name"
                onBlur={(e) => handleMobileView(e.target.value)}
            />
        </div>
    );
};
export default GameScreen;
