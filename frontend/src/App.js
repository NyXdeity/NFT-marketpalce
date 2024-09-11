import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateNFT from './components/CreateNFT';
import Marketplace from './components/Marketplace';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create-nft" component={CreateNFT} />
          <Route path="/marketplace" component={Marketplace} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
