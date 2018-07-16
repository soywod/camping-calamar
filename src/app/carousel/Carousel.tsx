import React, {Component, ReactNode} from "react"
import Carousel from "react-slick"

const styles = require("./Carousel.sass")
const left = require("../../static/images/carousel/arrow-left.png")
const right = require("../../static/images/carousel/arrow-right.png")

const settings = {
  dots: true,
  nextArrow: <img src={right} className={styles.arrow} alt="Next slide" />,
  prevArrow: <img src={left} className={styles.arrow} alt="Previous slide" />,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 200,
}

interface Props {
  googleFolderId: string
}

interface State {
  images: string[]
}

class CarouselComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      images: [],
    }
  }

  public render() {
    if (! this.state.images.length) {
      return null
    }

    return (
      <div className={styles.carousel}>
        <Carousel {...settings}>
          {this.state.images.map((image, key) =>
            <img key={key} alt={`image-${key}`} src={image} />,
          )}
        </Carousel>
      </div>
    )
  }

  public componentDidMount() {
    const baseurl = "https://www.googleapis.com/drive/v3/files"
    const q = `'${this.props.googleFolderId}'+in+parents`
    const key = "AIzaSyCIhb6NQ1EE7jlNrkVaGj1BKQn3QkHcM2w"

    fetch(`${baseurl}?q=${q}&key=${key}&fields=files(webContentLink)`)
      .then((data: any) => data.json())
      .then((data: any) => data.files.map((f: any) => f.webContentLink))
      .then((images: string[]) => this.setState({images}))
  }
}

export default CarouselComponent
