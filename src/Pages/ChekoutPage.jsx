import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import '../styles/checkoutPage.css';

const CheckoutPage = () => {
  const { handleSubmit } = useForm();
  const cart = useSelector(state => state.cart.products);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const onSubmit = (data) => {
    console.log('Order submitted:', data);
    alert("Order submitted");
  };

  return (
    <div className='content'>
      <form onSubmit={handleSubmit(onSubmit)} className='checkout-form'>
        <h1>Checkout</h1>
        <table className='checkout-table'>
          <tr>
          <td><label>Name </label> </td>
          <td><input type="text" placeholder='Enter your name' required /></td>
          </tr>
          <tr>
          <td><label>Address </label> </td>
           <td><input type="text" placeholder='Enter your address' required/></td>
          </tr>
          <tr>
          <td><label>Pyment </label> </td>
          <td><input type="text" placeholder='Enter your pyment details' required/></td>
          </tr> 
        </table>
        <h3>Total Price: ${totalPrice}</h3>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
