import React from 'react';

import logo from './images/logo.svg';
import A from './styles/A';
import Img from './styles/Img';
import StyledLink from './styles/StyledLink';
import InnerHeader from './styles/InnerHeader';
import LeftElements from './styles/LeftElements';
import RightElements from './styles/RightElements';

class Header extends React.Component {
  render() {
    const TheLink = props => (
      <A rel={props.itemRel} title={props.thetitle} target="_blank" href={props.theurl}>
        <i className={`icn ${props.icon}`} />
      </A>
    );

    return (
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
        role="banner"
      >
        <InnerHeader>
          <LeftElements>
            <StyledLink to="/">
              <Img src={logo} alt="Logo" />
            </StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
          </LeftElements>

          <RightElements>
            <TheLink
              thetitle="Follow me on Twitter"
              itemRel="noopener"
              theurl="https://www.twitter.com/manoz"
              icon="icn-twitter"
            />
            <TheLink
              thetitle="Join me on Mastodon"
              itemRel="me"
              theurl="https://mastodon.social/@Manoz"
              icon="icn-mastodon"
            />
            <TheLink
              thetitle="Fork me on Github"
              itemRel="noopener"
              theurl="https://github.com/manoz"
              icon="icn-github"
            />
            <TheLink
              thetitle="Like me on Instagram"
              itemRel="noopener"
              theurl="https://www.instagram.com/manoz_/"
              icon="icn-instagram"
            />
            <TheLink
              thetitle="Play with me on Codepen"
              itemRel="noopener"
              theurl="http://codepen.io/Manoz/"
              icon="icn-codepen"
            />
          </RightElements>
        </InnerHeader>
      </header>
    );
  }
}

export default Header;
