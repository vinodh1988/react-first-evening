import React from 'react';
import Two from './Two';
import './App.css';

class App extends React.Component{
     constructor(){
          super();
          this.state = {
               appName: "My Demo react app",
               titles : ["Products","Achievements","Team"]
          }
     }
     render(){
             return(
            <div>
                 <h1>{this.state.appName}</h1>
                
                 <Two title={this.state.titles[0]} />
                 <Two title={this.state.titles[1]}/>
                 <Two title={this.state.titles[2]}/>
                 
                 &copy; all copy rights reserved. 2020
             </div>
             ) 
     }
}

export default App;

