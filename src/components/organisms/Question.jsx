import UserContext from "../contexts/UserContexts"
import { useContext, useEffect } from "react"

const Question = ({data}) => {

    const { userList } = useContext(UserContext) 
    

    // console.log(data.qID)
    // console.log(data.uID)
    // console.log(userList)

    const questionAuthor = userList.find(user => user.id === data.uID)
    console.log("Klausimo autorius:")
    console.log(questionAuthor.name)

    return (
        <>
        <div className="questionCard">
            <div className="userImg">
                <img src={questionAuthor.picture} alt={questionAuthor.name} />
            </div>
            <div className="qField">
                <h2>{data.question}</h2>
                <p>{data.description}</p>
                <div className="qInfo">
                    <p className="date">{data.date}</p>
                    <p className="edited">Edited</p>
                </div>

            </div>
            <div className="likeDislike">
                <p className="likes">{data.like}</p>
                <i className="glyphicon glyphicon-chevron-up"></i>
                <p className="dislikes">{data.dislike}</p>
                <i className="glyphicon glyphicon-chevron-down"></i>
            </div>
        </div>
        </>
    )
}

export default Question