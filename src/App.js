import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';

function App() {
    React.useEffect(()=>{
        const msg=firebase.messaging();
        msg.requestPermission().then(()=>{
            return msg.getToken();
        }).then((data)=>{
            console.warn("token",data)
        })
    })
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
