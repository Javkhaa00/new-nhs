import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Header from './containers/Header';
import NewsDetail from './pages/NewsDetail';
import AllNews from './pages/AllNews';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/news/:newsId" exact={true} component={NewsDetail} />
          <Route path="/allnews" exact={true} component={AllNews} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
