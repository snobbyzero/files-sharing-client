import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import './App.sass';
import Home from "./home/Home";
import HomeRedirect from "./home/HomeRedirect";
import DownloadFiles from "./download/DownloadFiles";
import NotFound from "./not_found/NotFound";
import RouteWithNav from "./RouteWithNav";
import CatalogFiles from "./catalog/CatalogFiles";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <RouteWithNav path="/files/:link" component={DownloadFiles}/>x
                <RouteWithNav path="/files" component={CatalogFiles}/>
                <RouteWithNav path="/redirect" component={HomeRedirect}/>
                <RouteWithNav exact path="/" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
