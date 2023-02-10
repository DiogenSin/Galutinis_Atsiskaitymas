import Question from "../organisms/Question"
import QAContext from "../contexts/QAContexts"
import { useContext } from "react"

const Main = () => {

    const { qList } = useContext(QAContext)

    return (


        <>
        <section id="questions">
            <div id="qHeader">
                <h1>Questions header</h1>
            </div>
            <div id="qBody">
                {
                    qList ?
                        
                        qList.map(question => 
                            <Question
                            key={question.qID}
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