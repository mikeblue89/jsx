// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create React components
function getButtonText(){
    return 'click on me!';
}

const App = ()=>{
    return (
     <div>
         <label className="label" for="name">
             Enter Name:
         </label>
         <input id="name" type="text"/>
         <button style={{backgroundColor: 'blue', color: 'white'}}>
             {getButtonText()}
         </button>
     </div>
    );
};


//Take the React component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);