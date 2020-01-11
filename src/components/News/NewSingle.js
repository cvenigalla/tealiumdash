import React, { Component } from 'react';

export default class NewSingle extends Component{

    
    renderItems(){
        return NewSingle = ({item}) => (
            <li>
                <p>{item.title}</p>
            </li>
        );
    }

    render(){
        return(
                this.renderItems()
        );
    }
}

// const NewSingle = ({item}) => (
//     <li>
//         <p>{item.title}</p>
//     </li>
// );

// export default NewSingle;
