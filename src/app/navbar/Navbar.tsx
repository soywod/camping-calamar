import React, {Component} from "react"
import {HashRouter as Router, Link, Route} from "react-router-dom"

import Area from "../area/Area"
import Contact from "../contact/Contact"
import Presentation from "../presentation/Presentation"

const logo = require("../../static/images/logo-camping-calamar.png")
const logoPresentationOn = require("../../static/images/logo-presentation-on.png")
const logoPresentationOff = require("../../static/images/logo-presentation-off.png")
const logoPricingOn = require("../../static/images/logo-pricing-on.png")
const logoPricingOff = require("../../static/images/logo-pricing-off.png")
// const logoBookingOn = require("../../static/images/logo-booking-on.png")
const logoBookingOff = require("../../static/images/logo-booking-off.png")
const logoAreaOn = require("../../static/images/logo-area-on.png")
const logoAreaOff = require("../../static/images/logo-area-off.png")
const logoContactOn = require("../../static/images/logo-contact-on.png")
const logoContactOff = require("../../static/images/logo-contact-off.png")
// const flagFR = require("../../static/images/flag-fr.png")
const flagEN = require("../../static/images/flag-en.png")
const flagDE = require("../../static/images/flag-de.png")
const flagIT = require("../../static/images/flag-it.png")

const styles = require("./Navbar.sass")

interface IState {
  isOpen: boolean
}

class NavbarComponent extends Component<{}, IState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  public render() {
    return (
      <Router>
        <div>
          <nav className={styles.nav}>
            <img className={styles.navLogo} src={logo} alt="Camping Calamar logo" />

            <div>
              <Link to="/presentation" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoPresentationOn} alt="Presentation icon" />
                  <img className={styles.off} src={logoPresentationOff} alt="Presentation icon" />
                </div>
                <span>Présentation</span>
              </Link>

              <Link to="/pricing" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoPricingOn} alt="Pricing icon" />
                  <img className={styles.off} src={logoPricingOff} alt="Pricing icon" />
                </div>
                <span>Infos & tarifs</span>
              </Link>

              <Link to="/booking" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoBookingOff} alt="Booking icon" />
                  <img className={styles.off} src={logoBookingOff} alt="Booking icon" />
                </div>
                <span>Réservation</span>
              </Link>

              <Link to="/area" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoAreaOn} alt="Area icon" />
                  <img className={styles.off} src={logoAreaOff} alt="Area icon" />
                </div>
                <span>Alentours</span>
              </Link>

              <Link to="/contact" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoContactOn} alt="Contact icon" />
                  <img className={styles.off} src={logoContactOff} alt="Contact icon" />
                </div>
                <span>Contact/plan</span>
              </Link>
            </div>

            <div className={styles.navLang}>
              <a href="#" className={styles.navLangItem}><img src={flagEN} alt="English flag" /></a>
              <a href="#" className={styles.navLangItem}><img src={flagDE} alt="German flag" /></a>
              <a href="#" className={styles.navLangItem}><img src={flagIT} alt="Italian flag" /></a>
            </div>
          </nav>

          <main className={styles.mainContent}>
            <Route exact path="/" component={Presentation} />
            <Route path="/presentation" component={Presentation} />
            <Route path="/area" component={Area} />
            <Route path="/contact" component={Contact} />
          </main>
        </div>
      </Router>
    )
  }

  private toggle = () => {
    const isOpen = !this.state.isOpen
    this.setState({isOpen})
  }
}

export default NavbarComponent
