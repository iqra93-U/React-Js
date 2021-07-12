import React from 'react';
import './App.css';
import TouitContainer from "./components/TouitContainer";
import {BrowserRouter,Route} from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
             
                <Header />
                <Route exact path="/" component ={Home}/>
                <Route path="/TouitContainer" component ={TouitContainer}/>
              
              
                </div>
            </BrowserRouter>
           
        )
    }
}

export default App;
