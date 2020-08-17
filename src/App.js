import React from 'react';
import './App.scss';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news" component={NewsDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
