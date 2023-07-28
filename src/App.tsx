import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NavigationBarComponent } from './components'
import { ContactUsPage, PrivacyPolicyPage, RegisterPage, TermsAndConditionsPage } from './pages';
import './App.css';

export const App = () => {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='*' element={<RegisterPage />} />
        </Routes>
        <NavigationBarComponent />
      </HashRouter>
    </div>
  );
}
