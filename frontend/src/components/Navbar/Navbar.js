import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
function NavbarFunction(){   
return(
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">ExploreCities</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="https://github.com/Codubee/ExploreCitiesTTH4-6">GitHub</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink href="/userinput/">User input</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/landingpage/">Landing Page</NavLink>
                </NavItem>
            </Nav>
        <NavbarText>Codubee</NavbarText>
        </Navbar>
    </div>
    );
}

export default NavbarFunction;
