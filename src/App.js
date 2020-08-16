import React from 'react';
import Chat from './components/Chat';

import firebase from 'firebase/app';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <h1>TETSETSETSETSETSET</h1>
      <Chat firebase={firebase}></Chat>
    </div>
  );
}

export default App;
