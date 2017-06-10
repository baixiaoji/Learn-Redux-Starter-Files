import React, { Component } from 'react';
import {Link} from "react-router" 

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

// react-router 
// http://www.ruanyifeng.com/blog/2016/05/react_router.html
// Link 是替代了a
class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Baixiaoji</Link>
               </h1>
               {React.cloneElement( this.props.children, this.props) }
            </div>
        )
    }
}

export default Main