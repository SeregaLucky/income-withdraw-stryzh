import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
/* import - ROUTES */
import routes from '../routes';
/* import - COMPONENTS */
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';
import Layout from './Layout/Layout';

const BalancePage = lazy(() =>
  import('../pages/BalancePage' /*webpackChunkName: "BalancePage"*/),
);
const IncomePage = lazy(() =>
  import('../pages/IncomePage' /*webpackChunkName: "IncomePage"*/),
);
const WithdrawPage = lazy(() =>
  import('../pages/WithdrawPage' /*webpackChunkName: "WithdrawPage"*/),
);

const App = () => (
  <BrowserRouter>
    <Header />

    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.BALANCE_PAGE} component={BalancePage} />
          <Route path={routes.INCOME_PAGE} component={IncomePage} />
          <Route path={routes.WITHDRAW_PAGE} component={WithdrawPage} />

          <Redirect to={routes.BALANCE_PAGE} />
        </Switch>
      </Suspense>
    </Layout>

    <Footer />
  </BrowserRouter>
);

export default App;
