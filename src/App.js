import React, { useState, useEffect } from "react";
import './App.css';
import Web3 from "web3";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Creator from './Components/Creator';
import Supplier from './Components/Supplier';
import Warehouse from './Components/Warehouse';
import Logistics from './Components/Logistics';


function App() {

  const [account, setAccount] = useState();

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);

  

  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navigation />
          Your account is: {account}
          <Routes>
            <Route exact path='/creator' element={< Creator />}></Route>
            <Route exact path='/supplier' element={< Supplier />}></Route>
            <Route exact path='/warehouse' element={< Warehouse />}></Route>
            <Route exact path='/logistics' element={< Logistics />}></Route>
          </Routes>
        </div>

      </Router>

    </div>
  );
}
export default App;
