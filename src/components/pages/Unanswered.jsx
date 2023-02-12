import UnansweredQuestions from "../organisms/UnAnsweredQuestions"
import { NavLink} from 'react-router-dom'
import QAContext from "../contexts/QAContexts"
import { useContext } from "react"

const Unanswered = () => {

    const { handleSorting } = useContext(QAContext)

    return (

        <>
        <section id="questions">
            <div id="qHeader">
            <div id="sorting">
                    <p>Sort by:</p>
                    <select name="sort" id="sort" onChange={handleSorting}>
                        <option value="date">Date</option>
                        <option value="answers">Answers</option>
                    </select>
                </div>
                <div id="filter">
                    <NavLink to='/questions/all'>All</NavLink>
                    <NavLink to='/questions/answered'>Answered</NavLink>
                    <NavLink to='/questions/unanswered'>Unanswered</NavLink>
                </div>
            </div>
            <div id="qBody">
                

                   <UnansweredQuestions/>

            </div>
        </section>


        
        </>
    )
}

export default Unanswered