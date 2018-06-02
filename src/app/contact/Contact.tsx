import React, {Component} from "react"

import Footer from "../footer/Footer"
import Homing from "../homing/Homing"
import GoogleMap, {getGoogleMapURL} from "./GoogleMap"

const styles = require("./Contact.sass")
const header = require("../../static/images/contact/header.png")
const phone = require("../../static/images/contact/phone.png")
const address = require("../../static/images/contact/address.png")
const email = require("../../static/images/contact/email.png")

class ContactComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <>
        <Homing src={header} title={<>Contact<br/>plan</>} />

        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <img className={styles.contactIcon} src={phone} alt="Phone" />
            <h3 className={styles.contactTitle}>En saison</h3>
            <div className={styles.contactContent}>(+33) 4 95 38 03 54</div>

            <h3 className={styles.contactTitle}>Hors saison</h3>
            <div className={styles.contactContent}>(+33) 4 95 34 08 44</div>
          </div>

          <div className={styles.contactItem}>
            <img className={styles.contactIcon} src={address} alt="Address" />
            <h3 className={styles.contactTitle}>Camping Calamar</h3>
            <div className={styles.contactContent}>Prunete, 20221 Cervione</div>
            <div className={styles.contactContent}>CORSE, FRANCE</div>
          </div>

          <div className={styles.contactItem}>
            <img className={styles.contactIcon} src={email} alt="Email" />
            <h3 className={styles.contactTitle}>Email</h3>
            <div className={styles.contactContent}>
              <a href="mailto:reservation@campingcalamar.eu">reservation@campingcalamar.eu</a>
            </div>
          </div>
        </div>

        <GoogleMap
          googleMapURL={getGoogleMapURL()}
          loadingElement={<div style={{height: "100%"}} />}
          containerElement={<div className={styles.map} />}
          mapElement={<div style={{height: "100%"}} />}
        />

        <Footer />
      </>
    )
  }
}

export default ContactComponent
