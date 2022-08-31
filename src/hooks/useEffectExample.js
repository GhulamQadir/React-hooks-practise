import React, { useEffect, useState } from "react";





function UseEffectExampleComponent() {

    const [time, setTime] = useState()
    const [bool, setBool] = useState(false)


    const showDate = () => {
        setBool(true)
        setTime(new Date().toString())
    }
    const hideDate = () => {
        setBool(false)
        setTime()
    }



    useEffect(() => {
        console.log("Component Updated")
        const interval = setInterval(showDate)

        if (!bool) {
            clearInterval(interval)
        }

        return () => {
            console.log("Clean Up interval!")
            clearInterval(interval)
        }
    },
        [time]      // if we pass an empty array, then it runs only when the component renders
    )
    return (
        <div>
            <h1>Use Effect Component</h1>
            <p>{time}</p>
            <button onClick={bool ? hideDate : showDate}>{bool ? "Hide Date" : "Show Date"}</button>
        </div>
    )
}
export default UseEffectExampleComponent;