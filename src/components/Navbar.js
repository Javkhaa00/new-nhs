import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="header">
                <div className="header--nav">
                    <div className="header--nav--logo">
                        <img className="header--nav--logo--img" alt="nest-logo" src="/assets/logo-colored.png" />
                    </div>
                </div>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar