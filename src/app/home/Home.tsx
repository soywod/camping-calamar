import React, {Component} from "react"

declare function init(): any

const styles = require("./Home.sass")
const loader = require("../../static/images/animation/loader.gif")

class HomeComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    const canvas = ((window.innerWidth - 320) / window.innerHeight > 1.5)
      ? styles.canvasFullWidth
      : styles.canvasFullHeight

    return (
      <>
        <div id="animation_container" className={styles.animation}>
          <canvas id="canvas" className={canvas}></canvas>
          <div id="dom_overlay_container" className={styles.overlay}>
          </div>
        </div>

        <div id="_preload_div_" className={styles.overlay}>
          <span />
          <img src={loader} />
        </div>
      </>
    )
  }

  public componentDidMount() {
    init()
  }
}

export default HomeComponent
