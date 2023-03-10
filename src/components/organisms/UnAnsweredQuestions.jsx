import Question from "./Question"
import QAContext from "../contexts/QAContexts"
import UserContext from "../contexts/UserContexts"
import { useContext } from "react"
import Answers from "./Answers"
import NewAnswer from "./NewAnswer"
import { nanoid } from "nanoid"

const UnansweredQuestions = () => {

    const { qList, aList } = useContext(QAContext)
    const { userList } = useContext(UserContext)

    return (


        <>
            {
                qList && userList ?
                    
                    qList.map(question => 
                        (
                            aList.filter(answer => answer.qID === question.id).length == 0 ? 
                            <div
                            className="qAnda"
                            key={question.id}
                            >
                            <Question data={question}/>
                            {
                                aList ?
                                <Answers qID={question.id} />
                                :
                                <h3>Loading</h3>
                            }
                                <NewAnswer data={question} />
                            </div>

                            :

                            null

                        )

                        )
                :
                (userList ? <h3>No unanswered questions!</h3> : <h1>Loading</h1>)

            }
        </>
    )
}

export default UnansweredQuestions