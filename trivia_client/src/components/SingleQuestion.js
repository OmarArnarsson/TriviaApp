/* Ítrar í gegnum gögn sem eru fengin úr BuildView og býr til spurninga spjöldin */
import React from 'react'
import '../CSS/SingleQuestion.css'



export default function SingleQuestion({ question: { category, question, correct_answer } }) {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h4>{category}</h4>
                    <p>{question}</p>
                </div>
                <div className="flip-card-back">
                    <h4>Answer</h4>
                    <p>{correct_answer}</p>
                </div>
            </div>
        </div>
    )
}

