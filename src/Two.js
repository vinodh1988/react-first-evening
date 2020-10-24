import React from 'react';


class Two extends React.Component{
    constructor(){
         super();
         console.log("Two Component Created");
         this.state={}
    }

    static getDerivedStateFromProps(props, state) {
         console.log(props,state)
     return {  };
   }
     render(){
             return(
            <div className={this.props.theme}>
                {this.props.title}
                <hr/>
                <ul>
                     {
                        this.props.list.map(x=> <li key={x}>{x}</li>)
                     }
                </ul>
             </div>
             ) 
     }
}

export default Two;