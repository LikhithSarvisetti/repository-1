import React from 'react'

export default function ListRendering() {

 let emplist=[

    {
        name:"kavya",
        salary:300000,
        email: "kavya@gmail.com"
    },
    {
        name:"kavy",
        salary:300000,
        email: "kavy@gmail.com"
    },
    {
        name:"kav",
        salary:300000,
        email: "kav@gmail.com"
    },
 ]

    return (
        <div>
            <h1>List Rendering</h1>
            {/* {
            emplist.map(element => {
                <h1>{element}</h1>
            }
            }) */}
            {
            emplist.map(
                empdata =>
                <div>
                <p>{empdata.name}</p>
                <p>{empdata.salary}</p>
                <p>{empdata.email}</p>
                </div>
            )
            }
            
        </div>
    )
}
