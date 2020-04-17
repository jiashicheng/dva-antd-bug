import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Products from './routes/Products';
import Count from './routes/Count';
import IndexPage2 from './routes/homePage/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage2} />
        <Route path="/products" exact component={Products} />
        <Route path="/Count" exact component={Count} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
