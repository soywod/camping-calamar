import React, {Component, ReactElement} from "react"

import Tile from "../tile/Tile"

const styles = require("./TilePair.sass")

class TilePairComponent extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <div className={styles.tilePair}>
        {this.props.children}
      </div>
    )
  }
}

export default TilePairComponent
