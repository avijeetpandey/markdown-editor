import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'


const App=()=>{
    return(
        <div>
        <Navbar />
            <p>Hello Markdown Editor</p>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Redirect path="/" />
            </Switch>
        </div>
    )
}

export default App