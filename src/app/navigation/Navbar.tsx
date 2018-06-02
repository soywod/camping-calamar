import React, {Component} from "react"
import {Link, Route} from "react-router-dom"

const logo = require("../../static/images/logo-camping-calamar.png")
const burger = require("../../static/images/navbar/burger.png")
const cross = require("../../static/images/navbar/cross.png")
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
const flagFR = require("../../static/images/navbar/flag-fr.png")
const flagEN = require("../../static/images/navbar/flag-en.png")
const flagDE = require("../../static/images/navbar/flag-de.png")
const flagIT = require("../../static/images/navbar/flag-it.png")

const styles = require("./Navbar.sass")

interface IState {
  opened: boolean
}

class NavbarComponent extends Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      opened: false,
    }
  }

  public render() {
    return (
      <>
        <img className={styles.burgerOpen} src={burger} alt="Open menu" onClick={this.openNavbar} />
        <nav className={styles.nav} data-open={this.state.opened}>
          <img className={styles.burgerClose} src={cross} alt="Close menu" onClick={this.closeNavbar} />
          <Route
            exact
            path="/"
            children={() => (
              <Link to="/">
                <img width="100%" className={styles.navLogo} src={logo} alt="Camping Calamar logo" />
              </Link>
            )}
          />

          <div>
            <Route
              exact
              path="/presentation"
              children={({match}) => (
                <Link to="/presentation" className={styles.item} data-match={!!match}>
                  <div className={styles.itemLogo}>
                    <img className={styles.on} src={logoPresentationOn} alt="Presentation icon" />
                    <img className={styles.off} src={logoPresentationOff} alt="Presentation icon" />
                  </div>

                  <span>Présentation</span>
                </Link>
              )}
            />

            <Route
              exact
              path="/pricing"
              children={({match}) => (
                <Link to="/pricing" className={styles.item} data-match={!!match}>
                  <div className={styles.itemLogo}>
                    <img className={styles.on} src={logoPricingOn} alt="Pricing icon" />
                    <img className={styles.off} src={logoPricingOff} alt="Pricing icon" />
                  </div>
                  <span>Infos & tarifs</span>
                </Link>
              )}
            />

            <Route
              exact
              path="/booking"
              children={({match}) => (
                <Link to="/booking" className={styles.item} data-match={!!match}>
                  <div className={styles.itemLogo}>
                    <img className={styles.on} src={logoBookingOff} alt="Booking icon" />
                    <img className={styles.off} src={logoBookingOff} alt="Booking icon" />
                  </div>
                  <span>Réservation</span>
                </Link>
              )}
            />

            <Route
              exact
              path="/area"
              children={({match}) => (
                <Link to="/area" className={styles.item} data-match={!!match}>
                  <div className={styles.itemLogo}>
                    <img className={styles.on} src={logoAreaOn} alt="Area icon" />
                    <img className={styles.off} src={logoAreaOff} alt="Area icon" />
                  </div>
                  <span>Alentours</span>
                </Link>
              )}
            />

            <Route
              exact
              path="/contact"
              children={({match}) => (
                <Link to="/contact" className={styles.item} data-match={!!match}>
                  <div className={styles.itemLogo}>
                    <img className={styles.on} src={logoContactOn} alt="Contact icon" />
                    <img className={styles.off} src={logoContactOff} alt="Contact icon" />
                  </div>
                  <span>Contact/plan</span>
                </Link>
              )}
            />
          </div>

          <div className={styles.lang}>
            <a href="#" className={styles.langItem}><img src={flagFR} alt="French translation" /></a>
            <a href="#" className={styles.langItem}><img src={flagEN} alt="English translation" /></a>
            <a href="#" className={styles.langItem}><img src={flagDE} alt="German translation" /></a>
            <a href="#" className={styles.langItem}><img src={flagIT} alt="Italian translation" /></a>
          </div>
        </nav>
      </>
    )
  }

  private openNavbar = () => {
    this.setState({opened: true})
  }

  private closeNavbar = () => {
    this.setState({opened: false})
  }
}

export default NavbarComponent
