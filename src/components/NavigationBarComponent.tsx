import React from 'react'
import './NavigationBarComponent.css';
import { Link, useLocation } from 'react-router-dom';
import { HealthComponent } from './HealthComponent';

export const NavigationBarComponent = () => {
    const defaultLink = { path: '/registration', caption: 'Registration', className: '' };

    const links = [
        defaultLink,
        { path: '/contact-us', caption: 'Contact Us', className: '' },
        { path: '/terms-and-conditions', caption: 'Terms and Conditions', className: '' },
        { path: '/privacy-policy', caption: 'Privacy Policy', className: '' },
    ];

    const location = useLocation();
    const match = links.find(link => link.path === location.pathname) || defaultLink;
    match.className = 'active'

    return (<div className='navbar'>
        <ul>
            {links.map(link => <li key={link.path}><Link className={link.className} to={link.path}>{link.caption}</Link></li>)}
            <li><HealthComponent /></li>
        </ul>
    </div>);
}
