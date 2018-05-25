import React, {Component} from "react"

const styles = require("./Booking.sass")

class BookingComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <form className={styles.booking}>
        <h1 className={styles.bookingTitle}>Réservation</h1>

        <div className={styles.bookingFieldGroup}>
          <input type="text" placeholder="Nom" className={styles.bookingField} />
          <input type="text" placeholder="Prénom" className={styles.bookingField} />
          <input type="text" placeholder="Email" className={styles.bookingField} />
        </div>

        <div className={styles.bookingFieldGroup}>
          <input type="text" placeholder="Date d'arrivée" className={styles.bookingField} />
          <input type="text" placeholder="Date de départ" className={styles.bookingField} />
        </div>

        <div className={styles.bookingFieldGroup}>
          <select className={styles.bookingField}>
            <option value="0">1 Adulte</option>
          </select>
          <select className={styles.bookingField}>
            <option value="0">Aucun enfant</option>
          </select>
          <select className={styles.bookingField}>
            <option value="0">Type de véhicule</option>
          </select>
        </div>

        <div className={styles.bookingFieldGroup}>
          <textarea
            rows={6}
            className={styles.bookingField}
            placeholder="Laisser un commentaire ou une question ..."
          />
        </div>

        <div className={styles.bookingFieldGroup}>
          <button type="submit" className={styles.bookingSubmit}>envoyer</button>
        </div>
      </form>
    )
  }
}

export default BookingComponent
