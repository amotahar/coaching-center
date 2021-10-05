import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import Navigation from './Component/Navigation/Navigation';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';

import Training from './Component/Training/Training'



function App() {
  return (
    <div className="App">
 
  <BrowserRouter>
<Navigation></Navigation>



  <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>

    <Route  path="/home">
      <Home></Home>
    </Route>

    <Route path="/service">
      <Service></Service>
    </Route>

    <Route path="/training">
      <Training></Training>
    </Route>

    <Route path="/about">
    <About></About>
      </Route>

    <Route path="*">
      <NotFound></NotFound>
    </Route>
  

  </Switch>

  
  
  </BrowserRouter>
    </div>
  );
}

export default App;
