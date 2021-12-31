import React, { Component } from 'react'
import '../States.css'
export default class StateinClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Likhith",
             count:0
        }
    }
    
    render() {

        setTimeout(()=>{

        
            this.setState({
                name : "Likhith.S"
            })
        },5000)
        return (
            <div className='demo'>
                 <h1>Hello count is {this.state.count}</h1>
                <h1>Hello this is {this.state.name}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })

                }}>Increment Count</button>

                   

                 <button onClick={()=>{
                    this.setState({
                        count: this.state.count-1
                    })
                }}>Decrement Count</button>
                  
                    <button onClick={()=>{
                    this.setState({
                        count: 0
                    })
                }}>Reset Count</button> 
            </div>
        )
    }
}
