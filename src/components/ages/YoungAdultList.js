import React, { useEffect, useState} from "react"


export const YoungAdultList = () => {
    const [youngAdults, setYoungAdults] =useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/youngAdult")
                .then(res => res.json())
                .then((agesArray) => { 
                    setYoungAdults(agesArray)
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
            youngAdults.map(
                (youngAdultObject) => { 
                    return <h2>{youngAdultObject.name}</h2>
                }
            )
        }
        </>
    )
}
