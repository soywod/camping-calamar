import React, {Component} from "react"
import {HashRouter, Route, withRouter} from "react-router-dom"

import Area from "./area/Area"
import Booking from "./booking/Booking"
import Contact from "./contact/Contact"
import Home from "./home/Home"
import Navbar from "./navigation/Navbar"
import Presentation from "./presentation/Presentation"
import Pricing from "./pricing/Pricing"
import ScrollToTop from "./scroll/ScrollToTop"

const styles = require("./App.sass")

interface State {
  loaded: boolean
}

class AppComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {loaded: false}
  }

  public render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Navbar />

          <main className={styles.main}>
            <Route exact path="/" component={() => <Home loaded={this.state.loaded} />} />
            <Route exact path="/presentation" component={Presentation} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/area" component={Area} />
            <Route exact path="/contact" component={Contact} />
          </main>
        </ScrollToTop>
      </HashRouter>
    )
  }

  public componentDidMount() {
    window.onload = () => {
      const $loader = document.getElementById("loader")
      if (! $loader) {
        return
      }

      $loader.className = "loaded"

      this.setState({loaded: true})
      setTimeout(() => document.body.removeChild($loader), 1000)
    }
  }

  public componentWillUnmount() {
    window.onload = null
  }
}

export default AppComponent
