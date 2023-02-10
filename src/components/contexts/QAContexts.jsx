import { createContext, useState, useEffect } from "react";

const QAContext = createContext()

const QAProvider = ({children}) => {

    const [qList, setQList] = useState(null)


    const getQData = async() => {

        const fetchData = await fetch('http://localhost:3001/questions')
        .then (res => res.json())
        setQList(fetchData)

    }

    useEffect(() => {
        getQData()
      }, [])


    return (

        <QAContext.Provider
            value={{
                qList
            }}
        >
            {children}
        </QAContext.Provider>

    )

}


export { QAProvider }
export default QAContext