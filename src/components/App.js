import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Main css file
import '../App.css';

// IMPORTING PAGES
import Home from './pages/Home';
import Blog from './Blog';
import Events from './pages/Eventpage';
import Team from './team'

// IMPORTING LAYOUTS
import Navbar from './layouts/Navbar';

// IMPORTING SECTIONS
import Footer from './sections/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Events" component={Events} />
        <Route path="/Team" component={Team} />
        <Route path="/Join" component={Home} />
        <Route path="/Projects" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
