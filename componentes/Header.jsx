import React from 'react';

const Header = ({ setView }) => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><a href="#" onClick={() => setView('home')}>Home</a></li>
        <li><a href="#" onClick={() => setView('about')}>About</a></li>
        <li><a href="#" onClick={() => setView('dashboard')}>Dashboard</a></li>
      </ul>
    </nav>
  );
};

export default Header;
