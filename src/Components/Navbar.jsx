import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

const Navbar = () => {
  const cart = useSelector(state => state.cart.products);
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Tech Haven</h2>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
