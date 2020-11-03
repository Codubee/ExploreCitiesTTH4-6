import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  const example = (props) => {
//function Navbar(){
    return(
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">ExploreCities</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="https://github.com/Codubee/ExploreCitiesTTH4-6">GitHub</NavLink>
                </NavItem>
            </Nav>
        <NavbarText>Codubee</NavbarText>
        </Navbar>
    </div>
    )
}
export default example;