import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './components/checkoutForm';


const stripePromise = loadStripe('pk_test_51Nk7AESAeLqr2N5IuEFzt6a1vgHTj2AtS8KZSvEIkhovUPJevZW3tjDdGRM456DxdrMA1n8tsKXczBk3kWBeQTMq00rApdBlm1');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'inr',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const App = () => (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
);

ReactDOM.render(<App />, document.body);
export default App;