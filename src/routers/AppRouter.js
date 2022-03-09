import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/core/PageNotFound';
import LoginContextProvider from '../context/LoginContext';
import MainPage from '../components/core/MainPage';
import PublishPage from '../components/core/PublishPage';

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/publish" exact component={PublishPage} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </LoginContextProvider>
    </BrowserRouter>
)

export default AppRouter;