import React from 'react';
import { Cert, DscLogo } from '../assets/logo';
import DQ from '../assets/DQ.png';
import { DoubleArrow } from '@material-ui/icons';

const Certificate = () => {
  return (
    <div className="cert">
      {/* certificate-header */}

      <div className="cert__header">
        <div className="cert__dsc-logo">
          <DscLogo />
          <span className="cert__dsc-name text">Developer Student Clubs</span>
        </div>
        <div className="cert__dq-logo">
          <img src={DQ} alt="dq-logo" className="cert__dq-img" />
        </div>
      </div>

      {/* Certificate- content */}

      <div className="cert__content">
        <div className="cert__name-group">
          <div className="cert__arrow-l">
            <DoubleArrow />
          </div>
          <p className="cert__name">Atharv jairath</p>
          <div className="cert__arrow-r">
            <DoubleArrow />
          </div>
        </div>
        <p className="text u-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit
          atque? Consequatur aperiam natus, ab esse omnis nihil eius alias.
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      {/* Certificate- footer */}
      <div className="cert__footer">
        <div className="cert__svg">
          <Cert />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
