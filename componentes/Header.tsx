'use client';
import React from 'react';

interface HeaderProps {
  setView: (view: string) => void;
}

const Header = ({ setView }: HeaderProps) => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333' }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView('home');
            }}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView('about');
            }}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView('dashboard');
            }}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Dashboard
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
