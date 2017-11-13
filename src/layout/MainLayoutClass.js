import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'


class App extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        console.log("App constructor");
    }

    componentDidMount() {
        console.log("App did mount");
    }

    componentWillUnmount() {
        console.log('App will unmount');
    }

    render() {
        console.log("APP render");
        return (
                <div className="ui info message">Welcome</div>
        );
    }

}

class IndexTV extends React.Component{

    constructor(props) {
        super(props);
        this.match = this.props.match;
        this.location = this.props.location;
        console.log("indexTv", this.props);
    }

    componentDidMount() {
        console.log("Index Tv did mount");
    }

    render() {
        console.log("IndexTV");
        console.log(this.location);
        return (
            <div className='ui info message'>电视节目列表 {this.location.search}</div>
        );
    }
  
}

class TV extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.match = this.props.match;
        this.location = this.props.location;
    }

    componentWillReceiveProps() {
        console.log("TV will receive props");
    }

    
    componentWillUpdate(nextProps, nextState) {
        console.log('TV did update.');
    }
    

    componentDidMount() {
        console.log("TV did mount");
    }
    render() {
        console.log(this.match);
        console.log(this.location);
        console.log("TV");// {path: "/tv", url: "/tv", isExact: true, params: Object}
        return (
            <div> 
                <Switch>
                    <Route exact path={`${this.match.path}`} component={IndexTV}></Route>
                    <Route path={`${this.match.path}/shows/:id`} component={Show} />
                    <Route exact path={`${this.match.url}/shows`} render={() => (
                        <h3>Please input a show id</h3>
                    )}/>
                </Switch>    
            </div>
        )
    }
}

class Show extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.match = this.props.match;
        this.location = this.props.location;
    }
    render() {
        console.log("show");
        return (
            <h3>节目 {this.match.params.id}</h3>
        )
    }
   
};

class MainLayoutClass extends React.Component{


    componentWillMount() {
        console.log("MainLayoutClass will mount")
    }

    componentWillReceiveProps() {
        console.log("MainLayoutClass will receive props");
    }

    
    componentWillUpdate(nextProps, nextState) {
        console.log('MainLayoutClass did update.');
    }
    



    render() {
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
                        } className="item" query={{'orderBy':'date'}}>电视</Link>
                    </div>
    
                    <Switch>
                        <Route exact path='/' component={App}></Route>
                        <Route path="/tv" component={TV}></Route>
                        {/* <Route path="/:user" component={User}/> */}
                        {/* <Redirect path="*" to="/" /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default MainLayoutClass;