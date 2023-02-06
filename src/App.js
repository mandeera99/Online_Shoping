import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';
import About from './component/About';
//import Contact from './component/Contact';
import React,{useState} from 'react';
function App() {
  const [show,setShow]=useState(true);
  const [cart,setCart]=useState([]);
  return (
    <>
      <Router>
        <Navbar size={cart.length}/>
        
        <Switch>
          <Route exact path="/products" component={Products } />
          <Route exact path="/" component={Home } />
          <Route exact path="/about" component={About } />
          <Route exact path="/login" component={Login } />
          <Route exact path="/products/:id" component={Product } />
          <Route exact path="/Register" component={Register } />
          <Route exact path="/cart" component={Cart } />

        </Switch>
      </Router>
    </>
  );
}

export default App;

