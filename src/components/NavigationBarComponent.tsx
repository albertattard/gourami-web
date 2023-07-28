import React from 'react'
import './NavigationBarComponent.css';
import { Link, useLocation } from 'react-router-dom';

export const NavigationBarComponent = () => {
    const links = [
        { path: '/registration', caption: 'Registration', className: '' },
        { path: '/contact-us', caption: 'Contact Us', className: '' },
        { path: '/terms-and-conditions', caption: 'Terms and Conditions', className: '' },
        { path: '/privacy-policy', caption: 'Privacy Policy', className: '' },
    ];

    const location = useLocation();
    const match = links.find(link => link.path === location.pathname);
    if (match) {
        match.className = 'active'
    }

    return (<div className='navbar'>
        <ul>
            {links.map(link => <li key={link.path}><Link className={link.className} to={link.path}>{link.caption}</Link></li>)}
        </ul>
    </div>);
}
