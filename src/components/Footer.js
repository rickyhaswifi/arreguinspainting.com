import React,{Component} from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import {FooterWrap, Spacer} from '../styled-components/shared-sc'
import { FaYelp, FaGoogle, FaFacebook } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <>
      <Fade up>

      <FooterWrap>
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <h1
          style={{color:'white'}}
          >Arreguin's Paint Contractor, Inc.</h1>
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
             
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="yelp" target='_blank' href="https://www.yelp.com/biz/arreguins-paint-contractor-marietta">
                  <FaYelp/>
                </a>
                <a title="google" target='_blank' href="https://bit.ly/ArreguinsGoogleMap">
                  <FaGoogle />
                </a>
                <a title="facebook" target='_blank' href="https://www.facebook.com/ArreguinsPainting/">
                 <FaFacebook />
                </a>
              <ul style={{listStyle:'none', textAlign:'center'}}>
                <li>
                Jose Arreguin - (770) 378-6726
                </li>
                <li>
                Juan Espinoza - (404) 886-8373
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Spacer />
      <Spacer />
      </FooterWrap>
      </Fade>
      </>
    )
  }
}

export default Footer
