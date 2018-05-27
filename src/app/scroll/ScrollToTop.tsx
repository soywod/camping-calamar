import React, {Component} from "react"
import {RouteComponentProps, withRouter} from "react-router-dom"

type IProps = RouteComponentProps<{}>

class ScrollToTop extends Component<IProps, {}> {
  public componentDidUpdate(prevProps: IProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  public render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
