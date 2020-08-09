import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Editor from './components/Editor/Editor'


const App=()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/editor" component={Editor} />
                <Redirect path="/" />
            </Switch>
        </div>
    )
}

export default App