import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.sass';
import Home from "./home/Home";
import HomeRedirect from "./home/HomeRedirect";
import DownloadFiles from "./files/DownloadFiles";
import NotFound from "./not_found/NotFound";

function App() {

    return(
        <Router>
            <div className='menu'>
                <Switch>
                    <Route path="/files/:link" render={props => <DownloadFiles {...props}/>}/>
                    <Route path="/redirect" render={props => <HomeRedirect {...props}/>}/>
                    <Route exact path="/"><Home /></Route>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}



export default App;
