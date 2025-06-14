import React from 'react';

const Header = ({ setView }) => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
      <a href="#" onClick={() => setView('home')}>Home</a>
      <a href="#" onClick={() => setView('about')}>About</a>
      <a href="#" onClick={() => setView('dashboard')}>Dashboard</a>
    </nav>
  );
};

export default Header;
