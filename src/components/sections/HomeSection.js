import React from 'react';
import { Coder, Rocket } from '../../assets/logo';

const HomeSection = () => {
  return (
    <div className="home u-text-center u-mb-big u-mt-big">
      <div className="home__aim u-mb-big">
        <h1 className="h1 u-mb-small  home__head">Our Aim</h1>
        <p className="u-sm-text  u-sm-container home__text  u-mt-med">
          We think slightly out of the box, we believe that a club’s resources
          must not only be channeled into conducting events but also to
          propagate learning and teaching, symbiotically.
        </p>
      </div>

      <div className="home__social-media u-mb-big u-mt-big">
        <h1 className="h1 u-mb-small home__head">Social Media</h1>
        <p className="u-sm-text  u-sm-container home__text u-mt-med">
          We think slightly out of the box, we believe that a club’s resources
          must not only be channeled into conducting events but also to
          propagate learning and teaching, symbiotically.
        </p>
        <button className="btn btn--dark u-mt-med">Join Us</button>
      </div>

      <div className="home__blog u-mb-big u-mt-big">
        <h1 className="h1 u-mb-small home__head  ">Blog and Recourses</h1>
        <p className="u-sm-text  u-sm-container home__text u-mt-med">
          We think slightly out of the box, we believe that a club’s resources
          must not only be channeled into conducting events but also to
          propagate learning and teaching, symbiotically.
        </p>
        <button className="btn btn--dark u-mt-med">Know More</button>
      </div>

      <div className="home__contact u-mb-big u-mt-big">
        <h1 className="h1 u-mb-small home__head">Contact Us For An Idea</h1>
        <p className="u-sm-text u-mt-med  u-sm-container home__text">
          We think slightly out of the box, we believe that a club’s resources
          must not only be channeled into conducting events but also to
          propagate learning and teaching, symbiotically.
        </p>
        <button className="btn btn--dark u-mt-med">contact us</button>
      </div>

      <div className="home__rocket">
        <Rocket />
      </div>

      <div className="home__coder">
        <Coder />
      </div>
    </div>
  );
};

export default HomeSection;
