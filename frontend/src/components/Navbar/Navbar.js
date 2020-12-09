import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
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
                    <NavLink href="/">Landing Page</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="http://www.codubee.com/">Codubee</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
    );
}

export default NavbarFunction;
