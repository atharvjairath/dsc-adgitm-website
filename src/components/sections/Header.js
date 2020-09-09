import React from 'react';
import DscLogoV from '../../assets/dsc_logo_v.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__bg">
        <div className="header__content u-text-center">
          <img src={DscLogoV} alt="Logo" className="header__img" />
          <div className="header__arrow-down">&darr;</div>
        </div>
      </div>

      <div className="header__red-bubble"></div>
      <div className="header__blue-bubble"></div>
      <div className="header__green-bubble"></div>
      <div className="header__yellow-bubble"></div>
    </div>
  );
};

export default Header;
