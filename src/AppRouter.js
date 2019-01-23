import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import {Switch, Route} from 'react-router-dom';

const AppRouter =  () => (
    <Switch>
        <Route path='/about' component={About}/>
        <Route path='/' component={Home}/>
    </Switch>
);

export default AppRouter;
