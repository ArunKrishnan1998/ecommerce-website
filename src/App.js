import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js'
import Login from './Login.js'

import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe} from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders.js'

const promise = loadStripe("pk_test_51NIJHwSBd4BhqOzqhlxCBVNNTHbESEBulprYAXxnLqgGaRGl9eqJLqHg5wfD4Aco6VJUjOi70dIdXgUmhsrKrpsX00kCkW78zU");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
          // logged in / was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
          // Logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })
  }, [])
  return (
      <div className="app">
      
        <Routes>

          <Route exact path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />

          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />

          <Route path="/login" element={
            <>
              <Login />
            </>
          } />

          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                  <Payment />
              </Elements>
            </>
          }/>

          <Route path="/orders" element={
            <>
              <Header />
              <Orders />
            </>
          } />

        </Routes>
      </div>
  );
}

export default App;
