import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends React.Component {
    render() {
        const relativeList1 = [
            {Name: 'Saloni', key: 'relativeListItem1'},
            {Name: 'Riya', key: 'relativeListItem2'},
            {Name: 'Juhi', Key: 'relativeListItem3'},
            {Name: 'Priyanshi', key: 'relativeListItem4'}
        ];
        return(
            <div id="main">
               {/* Do not remove the main divn */}
               <ol key='relativeList'> 
                   {relativeList1.map(relative => {
                       return (
                       <li key={relative.key}>
                         {relative.Name}
                       </li>
                       );
                   })}
               </ol>
            </div>
        );
    }
}


export default App;
