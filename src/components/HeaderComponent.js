import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light sticky="top" expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <i className="fa fa-search" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="m-auto">
                <NavItem className="col-3">
                  <NavLink className="nav-link" to="/blog">
                    BLOG
                  </NavLink>
                </NavItem>
                <NavItem className="col-3">
                  <NavLink className="nav-link" to="/store">
                    STORE
                  </NavLink>
                </NavItem>
                <NavItem className="col-3">
                  <NavLink className="nav-link" to="/home">
                    <h1>Endusor</h1>
                  </NavLink>
                </NavItem>
                <NavItem className="col-3">
                  <NavLink className="nav-link" to="/aboutus">
                    ABOUT
                  </NavLink>
                </NavItem>
                <NavItem className="col-3">
                  <NavLink className="nav-link" to="/contactus">
                    CONTACT
                  </NavLink>
                </NavItem>
              </Nav>
              <div>
                <a className="btn-outline-gold" href="http://twitter.com/">
                  <i className="fa fa-instagram fa-lg" />{" "}
                </a>
                <a className="btn-outline-gold" href="http://twitter.com/">
                  <i className="fa fa-facebook fa-lg" />{" "}
                </a>
                <a className="btn-outline-gold" href="http://twitter.com/">
                  <i className="fa fa-twitter fa-lg" />{" "}
                </a>
                <a className="btn-outline-gold" href="http://amazon.com/">
                  <i className="fa fa-amazon fa-lg" />{" "}
                </a>
              </div>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
