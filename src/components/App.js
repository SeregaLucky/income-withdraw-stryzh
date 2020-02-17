import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
/* import - ROUTES */
import routes from '../routes';
/* import - COMPONENTS */
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BalancePage from '../pages/BalancePage';
import IncomePage from '../pages/IncomePage';
import WithdrawPage from '../pages/WithdrawPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={routes.BALANCE_PAGE} component={BalancePage} />
        <Route path={routes.INCOME_PAGE} component={IncomePage} />
        <Route path={routes.WITHDRAW_PAGE} component={WithdrawPage} />

        <Redirect to={routes.BALANCE_PAGE} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
