import React from "react";

const Hello = () => {
    // return(
    //     <div className = 'hello'>
    //     <h1>How Are You Favour</h1>
    // </div>
    // )

    return React.createElement('div', {id: 'hello', className: 'hello'}, React.createElement('h1', null, 'Favour can become the best programmer'))
   
}

export default Hello