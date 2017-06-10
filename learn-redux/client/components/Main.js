import React, { Component } from 'react';

// const  Main = React.createClass({
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Hi
//                </h1>
//             </div>
//         )
//     }
// })

// React.createClass 与 ES6 语法糖的区别
// https://toddmotto.com/react-create-class-versus-component/ 
class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    Hi
               </h1>
            </div>
        )
    }
}

export default Main