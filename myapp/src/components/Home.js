import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import FormRendering from './FormRendering';
import ListRendering from './ListRendering';
import StateInFunctionalComponent from './StateInFunctionalComponent';
export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                 <Route path="a" element={<StateInFunctionalComponent/>}> 
                 {/* <Route path="a" element={FormRendering}> 
                 <Route path="a" element={ListRendering}>  */}

                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

function Main(){
    return (
    <>
    <h1> :: Home Page ::</h1>
    <Link to="/login"><button>login</button></Link>
    </>
    )
}