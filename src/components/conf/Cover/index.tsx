import React from 'react';
import Logo from '../images/logo.svg';
import Button from '../common/Button';
import Wave from '../common/Wave';
import Web from './Web';
import Section from '../layout/Section';

const Cover: React.ComponentType = () => {
  return (
    <>
      <Section className="conf__cover" section="home">
        <div className="container">
          <span className="conf__cover-date">September 10, 2021 - Lille & online</span>
          <h1 className="conf__cover-logo">
            <img src={Logo} alt="Api Platform Conference" />
          </h1>
          <span className="conf__cover-baseline">
            The first international conference dedicated to API Platform and its ecosystem
          </span>
          <Button>Buy tickets</Button>
          <Web className="conf__cover-web" />
        </div>
        <Wave className="conf__cover-wave" animated={false} />
      </Section>
    </>
  );
};

export default Cover;
