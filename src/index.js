import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// react router
import { BrowserRouter as Wavy, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Login from './components/login/Login';
import Blog from './components/blog/Blog';

ReactDOM.render(
<Wavy>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/blog">blog</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/blog' component={Blog} />
        </Switch>
    </div>
</Wavy>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
