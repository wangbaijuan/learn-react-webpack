import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


const App = () => (
    <div>
        <h1>Welcome</h1>
    </div>
)

const TV = ({match}) => (
    <div> 
        <div className='ui info message'>
            电视节目列表{match.url}
        </div>
        {<Route path={`${match.path}/shows/:id`} component={Show}/>}
        {/* <Route path="/tv/shows/:id" component={Show}/> */}
        
    </div>
)

const Show = () => (
    <h3>节目</h3>
);

const MainLayout = () => (


    <Router>
        <div>
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">首页</Link>
                <Link to="/tv" className="item">电视</Link>
            </div>
            <Route exact path='/' component={App}></Route>
            <Route path="/tv" component={TV}></Route>
         </div>
    </Router>
)

export default MainLayout;