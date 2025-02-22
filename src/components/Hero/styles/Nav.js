import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  margin: 0 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.71429;
  color: #777 !important;

  &:visited {
    color: #777 !important;
  }
  &:hover {
    color: #000 !important;
    text-decoration: none !important;
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <nav style={{ textAlign: 'center' }}>
        <A href="#ido" > #what I do</A>
        <A href="#ilearned">#what I learned</A>
        <A href="#clients">#who are my clients</A>
        <A href="#where">#where I am</A>
        <A href="#hire">#hire me</A>
      </nav>
    );
  }
}

export default Nav;
