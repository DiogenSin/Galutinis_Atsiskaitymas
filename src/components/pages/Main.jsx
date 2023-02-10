import Question from "../organisms/Question"
import QAContext from "../contexts/QAContexts"
import UserContext from "../contexts/UserContexts"
import { useContext } from "react"

const Main = () => {

    const { qList } = useContext(QAContext)
    const { userList } = useContext(UserContext)

    return (


        <>
        <section id="questions">
            <div id="qHeader">
                <h1>Questions header</h1>
            </div>
            <div id="qBody">
                
                {
                    qList && userList ?
                        
                        qList.map(question => 
                            <Question
                            key={question.id}
                            data={question}
                            />
                            )
                            
                    :
                    <h1>Loading</h1>

                }

            </div>
        </section>


        
        </>
    )
}

export default Main