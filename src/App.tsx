import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HealthComponent } from './components'
import { NotFoundPage, RegisterPage } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<header className="App-header">
            <p>Gourami - CI/CD template</p>
            <HealthComponent />
          </header>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
