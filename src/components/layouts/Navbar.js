import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DscLogoH from '../../assets/dsc_logo_h.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    window.scrollY > 5 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={scrolled ? 'navbar nav-colored' : 'navbar nav-transparent'}>
      <div className="u-container">
        <Link to="/">
          <img src={DscLogoH} alt="dsc_logo" className="navbar__logo" />
        </Link>
        <ul className="navbar__collections">
          <li className="navbar__nav-links">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Blog">
              Blog
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Events">
              Events
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Team">
              Team
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Join">
              Join
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Projects">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
