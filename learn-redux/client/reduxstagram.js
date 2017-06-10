// let's go!
import React from "react"

import { render } from 'react-dom'

import './styles/style.styl'

// import component
import App from "./components/App"
import PhotoGrid from "./components/PhotoGrid"
import Single from "./components/Single"
import { Provider } from "react-redux"
import store, { history } from "./store"
// import router
import { Router, Route, IndexRoute, browserHistory } from "react-router"

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="view/:Postid" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

)

render(routes, document.getElementById("root"))
