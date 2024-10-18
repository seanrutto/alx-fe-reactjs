// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent:'space-between', padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
      <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
