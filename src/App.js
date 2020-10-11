import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.sass';
import {Home} from "./home/Home";
import {Test} from "./Test";

function App() {

    return(
        <Router>
            <div className='menu'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/test'>Test</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/test">
                        <Test />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}



export default App;
