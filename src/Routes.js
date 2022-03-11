import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import About from './pages/About'
import Features from './pages/Features'
import Home from './pages/Home'

export default function Routes( props) {
     return (
        <Switch>
            <Route path="/" exact={true}>
                <Home />
            </Route>
            <Route path="/about" exact={true}>
                <About />
            </Route>
            <Route path="/features" exact={true}>
                <Features />
            </Route>
        </Switch>
     )
}