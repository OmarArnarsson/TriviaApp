import React, { useState, Fragment } from 'react'
import Logo from '../Trivia_Logo5.png';
import '../CSS/Questions.css'
import Dropdown from './Dropdown';
import BuildView from './BuildView';


/*const QUESTIONS_Q = gql`
    {
        trivia {
            id
            category
            difficulty
            question
            correct_answer
        }
    }
`;*/


export default function Questions() {

    const [currCat, setCat] = useState('Cartoons & Animations')

    function handleChange(e) {
        setCat(e)
    }

        return (
            <Fragment>
                <div className="HeaderContainer"> {/* Div sem inniheldur header */}
                    <div className="LogoContainer"> {/* Kassi innan um logo */}
                        <div> {/* Logo */}
                            <img src={Logo} alt="Trivia App" />
                        </div>
                    </div>
                    <div className="ChoiceContainer"> {/* Svæði hægra megin við logo */}
                        <Dropdown value={currCat} onChange={handleChange} />
                    </div>
                </div>
                <div className="MainContainer"> {/* Svæði Div sem inniheldur main content */}
                    <div className="QuestionContainer"> {/* Div utan um spurningar */}
                        <BuildView value={currCat} onChange={handleChange} />
                    </div>
                </div>
            </Fragment>
        )
}

