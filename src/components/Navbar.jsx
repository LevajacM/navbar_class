import { useState } from 'react';
import logo from '../logo.svg';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className={showLinks ? 'navbar show-links' : 'navbar'}>
      <div className='section-center'>
        <img src={logo} alt='logo' className='logo' />
        <button className='toggle-btn' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>

        <div className='nav-links'>
          {links.map((link) => {
            return (
              <p key={link.id} className='nav-link'>
                <a href={link.url}>{link.text}</a>
              </p>
            );
          })}
        </div>
        <div className='social-links'>
          {social.map((link) => {
            return (
              <a
                href={link.url}
                target='_blank'
                key={link.id}
                className='social-link'
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
