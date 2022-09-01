import React, { useEffect, useState } from "react";





function UseEffectExampleComponent() {

    const [name, setName] = useState("Ghulam Qadir")
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


    // Runs only when time updated
    useEffect(() => {
        const interval = setInterval(showDate)
        console.log("I will run only when time updated")

        if (!bool) {
            clearInterval(interval)
        }

        return () => {
            // Used for hiding time
            clearInterval(interval)
        }
    }, [time])



    // Run on Every Render
    useEffect(() => {
        console.log("I will run on every render")

    })

    useEffect(() => {
        console.log("I will run only on first render")
        // if we pass an empty array, then it runs only when the component renders
    }, [])


    useEffect(() => {
        return () => {
            console.log("Unmount")
        }
    })

    return (
        <div>
            <h1>Use Effect Component</h1>
            <p>{time}</p>
            <button onClick={bool ? hideDate : showDate}>{bool ? "Hide Date" : "Show Date"}</button>
            <br />
            <h2>{name}</h2>
            <button onClick={() => setName("Ghulam Qadir Sakaria")}> Update Name</button>
        </div >
    )
}
export default UseEffectExampleComponent;