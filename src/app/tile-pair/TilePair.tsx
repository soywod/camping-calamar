import React, {Component} from "react"

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
