import React, {Component} from "react"

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
      <div className={styles.navbar}>
        <img className={styles.navbarLogo} src="#" alt="Camping Calamar logo" />

        <div>
          <a href="/presentation" className={styles.navbarMenuItem}>
            <img src="#" alt="Presentation icon" />
            Présentation
          </a>

          <a href="/pricing" className={styles.navbarMenuItem}>
            <img src="#" alt="Pricing icon" />
            Infos & tarifs
          </a>

          <a href="/booking" className={styles.navbarMenuItem}>
            <img src="#" alt="Booking icon" />
            Réservation
          </a>

          <a href="/area" className={styles.navbarMenuItem}>
            <img src="#" alt="Area icon" />
            Alentours
          </a>

          <a href="/contact" className={styles.navbarMenuItem}>
            <img src="#" alt="Contact icon" />
            Contact/plan
          </a>
        </div>

        <div className={styles.navbarLang}>
          <a href="#"><img src="#" alt="French flag" /></a>
          <a href="#"><img src="#" alt="English flag" /></a>
          <a href="#"><img src="#" alt="German flag" /></a>
          <a href="#"><img src="#" alt="Italian flag" /></a>
        </div>
      </div>
    )
  }

  private toggle = () => {
    const isOpen = !this.state.isOpen
    this.setState({isOpen})
  }
}

export default NavbarComponent
