import  './index.css'
import React from 'react';
import {
  Navbar,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

function Navi(args) {
  return (
    <div>
      <Navbar dark color="secondary">
          <Link className='text-decoration-none text-white' to="/">
          Redux Örnek Projem
          </Link>
        <div className="ms-auto text-white list-style-none">
        <CartSummary></CartSummary>
          </div>
      </Navbar>
    </div>
  );
}

export default Navi;