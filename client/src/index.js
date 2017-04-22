import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.js';
import About from './components/about.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';





$.get('/api/category?category=dog', function(data){
ReactDOM.render(<Router>
    <div>
        <Route exact path="/" render={() => {
            return <App imageList={JSON.parse(data)}/>
        }} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        </div>
</Router>, document.getElementById('main'));
 });