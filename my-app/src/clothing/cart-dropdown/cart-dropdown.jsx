import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../../clothing/custom-button/custom.button';
import {connect} from'react-redux';
import CartItem from '../../clothing/cart-item/cart-item';
import {withRouter} from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartDropDown =({cartItems,props,history})=>{
  console.log(cartItems)
  return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length?
          (cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>))
          :(<span className='empty-message'>Your cart is Empty</span>)
      }
    </div>
    <CustomButton onClick={()=>history.push('/checkout')}>Go To Checkout</CustomButton>
  </div>
)};

const mapStateToProps =createStructuredSelector
({
  cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));