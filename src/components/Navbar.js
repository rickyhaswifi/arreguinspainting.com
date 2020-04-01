import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/biglogo.png'
import {NavWrap, LogoImage, LogoText, NavItem, NavCTA} from '../styled-components/nav-sc'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      // <nav
      //   className="navbar is-transparent"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //   <div className="container">
      //     <div className="navbar-brand">
      //       <Link to="/" className="navbar-item" title="Logo">
      //         <LogoImage src={logo} alt="Arreguin's Painting" />  
      //         <h4>
      //         Arreguin's Painting
      //         </h4>
      //       </Link>
      //       {/* Hamburger menu */}
      //       <div
      //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
      //         data-target="navMenu"
      //         onClick={() => this.toggleHamburger()}
      //       >
      //         <span />
      //         <span />
      //         <span />
      //       </div>
      //     </div>
          
      //     <div
      //       id="navMenu"
      //       className={`navbar-menu ${this.state.navBarActiveClass}`}
      //     >
      //       <div className="navbar-start has-text-centered">
          
      //       </div>

      //       <div className="navbar-end has-text-centered">
      //       <Link className="navbar-item" to="/about">
      //           About
      //         </Link>
      //         <Link className="navbar-item" to="/services">
      //           Services
      //         </Link>
      //         <Link to='/'>
      //           <button className='btn'>404-123-4567</button>
      //         </Link>
      //       </div>
      //     </div>
      //   </div>
      // </nav>

      <NavWrap>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >

        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <LogoImage src={logo} alt="Arreguin's Painting" />  
              <LogoText>
              Arreguin's Paint Contractor, Inc.
              </LogoText>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span /> 
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            {/* <div className="navbar-start has-text-centered">
          
            </div> */}

            <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/about">
              <NavItem>
                About
              </NavItem>
              </Link>
              <Link className="navbar-item" to="/services">
                <NavItem>
                Services
                </NavItem>
              </Link>
              <Link className="navbar-item" to='/'>
                <NavCTA>Free Estimate</NavCTA>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </NavWrap>
    )
  }
}

export default Navbar
