import {useState} from "react";

const someShit = [1,2,3,4,5,6,7,8,9,10]

const Argarh = () => {
    const [showInput, setShowInput]  = useState({
        show: false,
        id: null,
    })

    const testFn = (key) => {
        setShowInput(item => {
            return {
                show: true,
                id: key,
            }
        })
    }
    return (
        someShit.map(item => (
            <p onClick={testFn.bind(null ,item)} key={item}>{showInput.show && showInput.id === item ? "goodbye" : "hello"}</p>
        ))
    )
}

export default Argarh