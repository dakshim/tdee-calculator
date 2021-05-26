import {
  Link
} from "react-router-dom";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


function Header() {
  return (
    <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">TDEE Calculator</NavbarBrand>
            <NavbarToggler  />
            <Collapse isOpen={false} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link to="/"><NavLink >Home</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link to="/about"><NavLink>About</NavLink></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
  );
}

export default Header;
