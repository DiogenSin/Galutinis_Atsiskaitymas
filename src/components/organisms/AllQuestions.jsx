import Question from "../organisms/Question"
import QAContext from "../contexts/QAContexts"
import UserContext from "../contexts/UserContexts"
import { useContext } from "react"
import Answers from "../organisms/Answers"
import NewAnswer from "../organisms/NewAnswer"

const AllQuestions = () => {

    const { qList, aList } = useContext(QAContext)
    const { userList } = useContext(UserContext)

    return (


        <>
            {
                qList && userList ?
                    
                    qList.map(question => 
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
                        )
                :
                <h1>Loading</h1>

            }
        </>
    )
}

export default AllQuestions