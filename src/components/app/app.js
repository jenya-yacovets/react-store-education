import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './app.css'
import { HomePage, CartPage } from '../pages'
import Header from '../header'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <Header numItem={10} total={150} />
            </div>
            <div className="row">
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/cart" component={CartPage} />
                </Switch>
            </div>
        </div>
    )
}

export default App