import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HealthComponent, NavigationBarComponent } from './components'
import { ContactUsPage, NotFoundPage, PrivacyPolicyPage, RegisterPage, TermsAndConditionsPage } from './pages';
import './App.css';

export const App = () => {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<header>
            <p>Gourami - CI/CD template</p>
            <HealthComponent />
          </header>} />
          <Route path='/registration' element={<RegisterPage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <NavigationBarComponent />
      </HashRouter>
    </div>
  );
}
