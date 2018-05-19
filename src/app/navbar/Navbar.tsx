import React, {Component} from "react"
import {BrowserRouter, Link, Route} from "react-router-dom"

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
      <BrowserRouter>
        <div>
          <nav className={styles.nav}>
            <img className={styles.navLogo} src={logo} alt="Camping Calamar logo" />

            <div>
              <a href="/presentation" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoPresentationOn} alt="Presentation icon" />
                  <img className={styles.off} src={logoPresentationOff} alt="Presentation icon" />
                </div>
                <span>Présentation</span>
              </a>

              <a href="/pricing" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoPricingOn} alt="Pricing icon" />
                  <img className={styles.off} src={logoPricingOff} alt="Pricing icon" />
                </div>
                <span>Infos & tarifs</span>
              </a>

              <a href="/booking" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoBookingOff} alt="Booking icon" />
                  <img className={styles.off} src={logoBookingOff} alt="Booking icon" />
                </div>
                <span>Réservation</span>
              </a>

              <a href="/area" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoAreaOn} alt="Area icon" />
                  <img className={styles.off} src={logoAreaOff} alt="Area icon" />
                </div>
                <span>Alentours</span>
              </a>

              <a href="/contact" className={styles.navItem}>
                <div className={styles.navItemLogo}>
                  <img className={styles.on} src={logoContactOn} alt="Contact icon" />
                  <img className={styles.off} src={logoContactOff} alt="Contact icon" />
                </div>
                <span>Contact/plan</span>
              </a>
            </div>

            <div className={styles.navLang}>
              <a href="#" className={styles.navLangItem}><img src={flagEN} alt="English flag" /></a>
              <a href="#" className={styles.navLangItem}><img src={flagDE} alt="German flag" /></a>
              <a href="#" className={styles.navLangItem}><img src={flagIT} alt="Italian flag" /></a>
            </div>
          </nav>

          <main className={styles.mainContent}>
            <Route exact path="/" component={() => <div>TODO</div>} />
          </main>
        </div>
      </BrowserRouter>
    )
  }

  private toggle = () => {
    const isOpen = !this.state.isOpen
    this.setState({isOpen})
  }
}

// poppins

export default NavbarComponent
