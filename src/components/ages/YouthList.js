import React, { useEffect, useState} from "react"


export const YouthList = () => {
    const [youths, setYouths] =useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/youth")
                .then(res => res.json())
                .then((agesArray) => { 
                    setYouths(agesArray)
                    })
                
        },
        []
    )


    return (
        <>
        <div>
             <button>Share your favorite book!</button>
        </div>

        <h1>Recommend a Book to the Vibrary</h1>

        {
            youths.map(
                (youthObject) => { 
                    return <h2>{youthObject.name}</h2>
                }
            )
        }
        </>
    )
}
