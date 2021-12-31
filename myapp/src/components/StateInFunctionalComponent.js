import React,{useState} from 'react'

export default function StateInFunctionalComponent() {


    let[name,updateName]=useState("Ankitha");
    return (
        <div>
            <h1 onMouseOver={()=>updateName("Anki")}
             onMouseLeave={()=>updateName("Ank") }>
                {name}
            </h1>

        </div>
    )
}
