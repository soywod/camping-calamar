import React, {Component} from "react"

const styles = require("./TilePair.sass")

interface State {
  visible: boolean
}

class TilePairComponent extends Component<{}, State> {
  private $container: HTMLDivElement | null

  constructor(props: {}) {
    super(props)

    this.state = {
      visible: false,
    }
  }

  public render() {
    const {visible} = this.state
    const {tilePair} = styles
    const {children} = this.props

    return (
      <div ref={(ref) => this.$container = ref} className={tilePair} data-visible={visible}>
        {children}
      </div>
    )
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.checkVisibility)
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.checkVisibility)
  }

  private checkVisibility = () => {
    if (! this.$container) {
      return
    }

    const wheight = window.innerHeight * .7
    const wscroll = window.scrollY
    const visible = wheight + wscroll > this.$container.offsetTop

    this.setState({visible})
  }
}

export default TilePairComponent
