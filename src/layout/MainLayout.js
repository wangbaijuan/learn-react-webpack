import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'


const App = () => {
    console.log("APP");
    return (
            <div className="ui info message">Welcome</div>
        )
}

const IndexTV = ({location}) => {
    console.log("IndexTV");
    console.log(location);
    return (
        <div className='ui info message'>电视节目列表</div>
    )
}

const TV = ({match,location}) => {
    console.log(match);
    console.log(location);
    console.log("TV");// {path: "/tv", url: "/tv", isExact: true, params: Object}
    return (
        <div> 
            <Switch>
                <Route exact path={`${match.path}`} component={IndexTV}></Route>
                <Route path={`${match.path}/shows/:id`} component={Show} />
                <Route exact path={`${match.url}/shows`} render={() => (
                    <h3>Please input a show id</h3>
                )}/>
            </Switch>    
        </div>
    )
}

const Show = ({match}) => {
    console.log("show");
    return (
        <h3>节目 {match.params.id}</h3>
    )
};

const User = ({match}) => {
    return (
        <h3> {match.params.user}</h3>
    );
}

const MainLayout = () => {

    let data = {
        orderBy: 'date'
    };

    return (
        <Router>
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    <Link to={{
                            pathname: '/tv',
                            query: data,
                            state: { price: 18 }
                        } 
                    } className="item">电视</Link>
                </div>

                <Switch>
                    <Route exact path='/' component={App}></Route>
                    <Route path="/tv" component={TV}></Route>
                    {/* <Route path="/:user" component={User}/> */}
                    <Redirect path="*" to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default MainLayout;