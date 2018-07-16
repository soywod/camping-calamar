import React, {Component, MouseEvent} from "react"

const styles = require("./Homing.sass")
const arrow = require("../../static/images/arrow-down.png")

interface Props {
  title: string | JSX.Element
  src?: string
}

class HomingComponent extends Component<Props, {}> {
  private container: HTMLDivElement | null

  constructor(props: Props) {
    super(props)
  }

  public render() {
    const style = this.props.src
      ?  {
        background: `url(${this.props.src}) center center`,
        backgroundSize: "cover",
      }
      : {}

    return (
      <div ref={(ref) => this.container = ref} className={styles.homing} style={style}>
        <h1 className={styles.homingTitle}>{this.props.title}</h1>
        <div className={styles.homingArrow}>
          <a href="#" onClick={this.scrollDown}>
            <img src={arrow} alt="Bottom arrow" />
          </a>
        </div>
      </div>
    )
  }

  private scrollDown = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.scrollTo(0, this.container && this.container.offsetHeight || 0)
  }
}

export default HomingComponent
