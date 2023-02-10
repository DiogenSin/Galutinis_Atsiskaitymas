import QAContext from "../contexts/QAContexts"
import { useContext } from "react"
import Answer from "./Answer"


const Answers = ({qID}) => {

    const { aList } = useContext(QAContext)

    const findAnwer = aList.filter(answer => answer.qID === qID)

    return (
        <>
        {
            findAnwer.map(answer => 
                
                <Answer
                key={answer.id}
                data={answer}
                />
                )
        }
        </>
    )
}

export default Answers