import React from 'react';
import { Link } from 'react-router-dom';
import StarAnimation from './StartAnimation';
const Header = () => {
  return (
    <header>
      <h1>Kai Yi Ji</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <StarAnimation />
    </header>
  );
};

export default Header;
