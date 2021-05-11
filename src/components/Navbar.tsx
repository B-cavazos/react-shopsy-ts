import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Navbar = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      {/* Logo */}
      <Link to='/' className='navbar-brand'>
        Shopsy
      </Link>

      {/* Menu */}
      <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>
      </div>

      {/* Cart Icon */}
      <div className='sh-cart-icon'>
        <div className='navbar-nav'>
          <Link to='/cart' className='nav-link'>
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
