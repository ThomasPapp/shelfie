import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dash from './components/Dash/Dash'
import Form from './components/Form/Form'

const routes = (
    <Switch>
        <Route exact path="/" render={ () => (
            <div className="main-container">
            <Dash />

            <Form />
            </div>
        ) } />
    </Switch>
)

export default routes;