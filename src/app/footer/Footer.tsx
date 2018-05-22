import React, {Component, Fragment} from "react"
import {Link} from "react-router-dom"

const styles = require("./Footer.sass")

class FooterComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <article className={styles.footerInfo}>
            <div className={styles.footerTitle}>camping calamar</div>
            <div>Prunete, 20221 Cervione</div>
            <div>CORSE, FRANCE</div>
            <div>
              Tél (saison) : <span className={styles.footerTel}>(+33) 4 95 38 03 54</span>
            </div>
            <div>
              Tél (hors saison) : <span className={styles.footerTel}>(+33) 4 95 34 08 44</span>
            </div>
            <div>
              Mail : <a href="mailto:reservation@campingcalamar.eu" className={styles.footerUrl}>
                reservation@campingcalamar.eu
              </a>
            </div>
          </article>

          <article className={styles.footerNav}>
            <Link to="/presentation">Présentation</Link>-
            <Link to="/pricing">Infos & tarifs</Link>-
            <Link to="/booking">Réservation</Link>-
            <Link to="/area">Alentours</Link>-
            <Link to="/contact">Contact</Link>
          </article>
        </div>

        <div className={styles.footerBottom}>
          Design & anim : Olivier DIAMANT <a href="www.dogms.com">www.dogms.com</a> / Développement : Clément DOUIN
        </div>
      </footer>
    )
  }
}

export default FooterComponent
