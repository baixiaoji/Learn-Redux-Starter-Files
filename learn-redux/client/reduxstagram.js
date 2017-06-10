// let's go!
import React from "react"

import { render } from 'react-dom'

import './styles/style.styl'

// import component
import Main from "./components/Main"
import PhotoGrid from "./components/PhotoGrid"
import Single from "./components/Single"

// import router
import { Router, Route, IndexRoute, hashHistory } from "react-router"

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="view/:Postid" component={Single}></Route>
        </Route>
    </Router>
)

render(routes, document.getElementById("root"))
