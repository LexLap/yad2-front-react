import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/core/PageNotFound';
import LoginContextProvider from '../context/LoginContext';

// import MainPage from '../components/core/MainPage';
// import PublishPage from '../components/core/PublishPage';

import LoadingModal from '../components/core/LoadingModal';

const MainPage = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../components/core/MainPage')), 500);
    })
})
const PublishPage = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../components/core/PublishPage')), 500);
    })
})

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Switch>
                <Suspense fallback={<LoadingModal />}>

                    <Route path="/" exact component={MainPage} />
                    <Route path="/publish" exact component={PublishPage} />

                </Suspense>
                <Route path="*" component={PageNotFound} />

            </Switch>
        </LoginContextProvider>
    </BrowserRouter>
)

export default AppRouter;