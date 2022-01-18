
import React from 'react';
import './App.css';
import firebase from './firebase';
function App() {
    console.log("p")

    React.useEffect(()=>{
        const msg=firebase.messaging();
        msg.requestPermission().then(()=>{
            return msg.getToken();
        }).then((data)=>{
            console.log("token",data)
        })
    })
    return (
        <div className="">

            <h1>React</h1>

        </div>
    );
}

export default App;
