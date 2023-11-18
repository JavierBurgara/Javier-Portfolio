// Navbar.js
import { Link } from 'react-router-dom';
import './index.css'

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1FIPOPA09PGTAk9EN_tFgaYTl-o9hDeF0uzBKi8OzElo/edit" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;