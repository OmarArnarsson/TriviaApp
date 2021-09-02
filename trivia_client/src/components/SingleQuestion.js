import React from 'react'
import '../CSS/SingleQuestion.css'



export default function SingleQuestion({ question: { category, question, correct_answer } }) {

    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h4>{category}</h4>
                    <p>{question}</p>
                </div>
                <div class="flip-card-back">
                    <h4>Answer</h4>
                    <p>{correct_answer}</p>
                </div>
            </div>
        </div>
    )
}

