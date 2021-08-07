import React from 'react';
// import logo from './logo.svg';
import Header from './Componets/Header';
import './App.css';
import Sidebar from './Componets/Sidebar';
import AddKeywordpage from './Pages/AddKeywordpage';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex'}}>
        <Sidebar />
        <div style={{width:"100%"}}>
          <Header />
          <AddKeywordpage />
        </div>
    
      </div>
     
    </div>
  );
}

export default App;
