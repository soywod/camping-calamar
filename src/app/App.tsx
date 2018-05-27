import React, {Component} from "react"

import Navbar from "./navbar/Navbar"

const styles = require("./App.sass")

interface IState {
  loaded: boolean
}

class AppComponent extends Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {loaded: false}
  }

  public render() {
    return <Navbar loaded={this.state.loaded} />
  }

  public componentDidMount() {
    const paths = require
      .context("../static/images", true)
      .keys()
      .map((path) => require(`../static/images/${path.substring(2)}`))

    const requests = paths.map((path) => new Promise((resolve, reject) => {
      const image = document.createElement("img")

      image.setAttribute("src", path)
      image.onload = resolve
      image.onerror = reject
    }))

    Promise
      .all(requests)
      .then(() => {
        this.setState({loaded: true})

        const $loader = document.getElementById("loader")
        if (! $loader) {
          return
        }

        $loader.className = "loaded"

        setTimeout(() => document.body.removeChild($loader), 600)
      })
  }
}

export default AppComponent
