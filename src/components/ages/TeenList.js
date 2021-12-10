import React, { useEffect, useState} from "react"


export const TeenList = () => {
    const [teens, setTeens] =useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/teen")
                .then(res => res.json())
                .then((agesArray) => { 
                    setTeens(agesArray)
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
            teens.map(
                (teenObject) => { 
                    return <h2>{teenObject.name}</h2>
                }
            )
        }
        </>
    )
}
