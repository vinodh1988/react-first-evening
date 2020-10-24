import React from 'react';


class Two extends React.Component{

     render(){
             return(
            <div className="box">
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