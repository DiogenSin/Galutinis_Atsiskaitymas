import AllQuestions from "../organisms/AllQuestions"
import AnsweredQuestions from "../organisms/AnsweredQuestions"
import UnansweredQuestions from "../organisms/UnAnsweredQuestions"
import { Routes, Route, NavLink} from 'react-router-dom'

const Main = () => {

    return (


        <>
        <section id="questions">
            <div id="qHeader">
                <div id="filter">
                    <NavLink to='/questions/all'>All</NavLink>
                    <NavLink to='/questions/answered'>Answered</NavLink>
                    <NavLink to='/questions/unanswered'>Unanswered</NavLink>
                </div>
            </div>
            <div id="qBody">
                
                    <AllQuestions />

            </div>
        </section>


        
        </>
    )
}

export default Main