import React,{createRef} from 'react';
import Two from './Two';
import './App.css';

export const temp ={a:35};
export const fun= ()=>{};
class App extends React.Component{
     constructor(){
          super();
          this.state = {
               appName: "My Demo react app",
               titles : ["Products","Achievements","Team"],
               items: [
                    ['ERP Product','Survey Product','Monitoring tool'],
                    ['XYZ Award 2020', 'ABC Award 2019'],
                    ["Ganesh","Joseph","Sameul"]
               ]
          }

          this.storeItem  = this.storeItem.bind(this);
          //UnControlled Component
          //Step 1 form fields should be assigned to creatRef() result
          this.item =createRef();
          this.type =createRef();
     }

     storeItem(){
          let item = this.item.current.value;
          let type = this.type.current.value;
          this.state.items[type].push(item);
          console.log(this.state.items);
          this.setState(this.state);
     }
     render(){
             return(
            <div>
                 <h1>{this.state.appName}</h1>
                <div>
                   Enter an Item <input type="text" ref={this.item}/> 
                   <select ref={this.type}>
                      {this.state.titles.map((x,index)=><option key={index} value={index}>{x}</option>)}
                   </select>
                   <button onClick={this.storeItem}>Add item</button>
                </div>
              {
                   this.state.titles.map((x,index)=>
                 <Two key={x} title={x} list={this.state.items[index]} />
                   )
              } 
               
             </div>
             ) 
     }
}

export default App;

