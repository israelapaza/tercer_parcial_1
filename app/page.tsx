'use client';
import React, { useState } from 'react';
import Header from '../componentes/Header';
import Home from '../componentes/Home';
import About from '../componentes/About';
import Dashboard from '../componentes/Dashboard';

export default function Page() {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setView={setView} />
      <hr />
      <div style={{ padding: '1rem' }}>
        {renderView()}
      </div>
    </div>
  );
}
