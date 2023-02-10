import UserContext from "../contexts/UserContexts"
import { useContext } from "react"

const Answer = ({data}) => {

    const { userList } = useContext(UserContext)

    const answerAuthor = userList.find(user => user.id === data.uID)

    return (

        <>
                <div className="answerCard">
                    <div className="imgAndAnswer">
                    <div className="userImg">
                        <img src={answerAuthor.picture} alt={answerAuthor.name} />
                    </div>
                    <div className="aField">
                        <p>{data.answer}</p>
                    </div>
                    </div>
                    <div className="likeDislike">
                        <p className="like">15</p>
                        <i className="glyphicon glyphicon-chevron-up"></i>
                        <p className="dislike">20</p>
                        <i className="glyphicon glyphicon-chevron-down"></i>
                    </div>
                </div>  
        </>
    )
}

export default Answer