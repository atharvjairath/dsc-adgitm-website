import React, { Fragment } from 'react';
import { DownArrow, DscLogo, Think } from '../../assets/logo';

const Header = () => {
  return (
    <Fragment>
      <div className="header u-mb-big">
        <div className="u-container">
          <div className="header__content">
            <div className="header__left">
              <div className="header__logo u-mb-small">
                <DscLogo />
                <p className="text">Dsc adgitm</p>
              </div>
              <h3 className="header__head h2 u-mb-small">
                Powered By Google Developers
              </h3>
              <p className="text">
                DSC is a Google Developers program for University students,
                designed to help you build your mobile and web development
                skills and knowledge. <br />
                <span className="extra">
                  It is open to any student, ranging from novice (developers who
                  are just starting), to advanced (developers who want to
                  further improve their skills). Join Us!!
                </span>
              </p>
            </div>
            <div className="header__right">
              <Think />
            </div>
          </div>
          <div className="header__down-arrow">
            <DownArrow />
          </div>
        </div>
      </div>
      <div className="header__red-bubble"></div>
      <div className="header__blue-bubble"></div>
      <div className="header__green-bubble"></div>
      <div className="header__yellow-bubble"></div>
    </Fragment>
  );
};

export default Header;
