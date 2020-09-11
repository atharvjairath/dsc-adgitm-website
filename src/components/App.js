import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//

// Main css file
import '../App.css';

// IMPORTING PAGES
import Home from './pages/Home';

// IMPORTING LAYOUTS
import Navbar from './layouts/Navbar';

// IMPORTING SECTIONS
import Footer from './sections/Footer';

AOS.init();

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Home} />
        <Route path="/Events" component={Home} />
        <Route path="/Team" component={Home} />
        <Route path="/Join" component={Home} />
        <Route path="/Projects" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
