import React,{Component} from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import {FooterWrap, Spacer} from '../styled-components/shared-sc'
import BlueStroke from '../shared/images/b-stroke-1.png'
import { FaYelp, FaGoogle, FaFacebook } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <>
      <Fade up>

      <FooterWrap>
    {/* <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
    <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#fff" />
    <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#273691" />
    </svg> */}
    
    {/* <img src={BlueStroke} style={{position:'absolute',zIndex:'1', top:'0'}}/>
    <img src={BlueStroke} style={{marginTop:'-200px'}}/> */}
      
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <h1
          style={{color:'white' }}
          >Arreguin's Paint Contractor, Inc.</h1>
          {/* <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          /> */}
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
                <a title="google" target='_blank' href="https//bit.ly/ArreguinsGoogleMap">
                  <FaGoogle />
                </a>
                <a title="facebook" target='_blank' href="https://facebook.com">
                 <FaFacebook />
                </a>
                {/* <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Spacer />
      </FooterWrap>
      </Fade>
      </>
    )
  }
}

export default Footer
