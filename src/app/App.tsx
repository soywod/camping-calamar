import React, {StatelessComponent} from "react"

const styles = require("./App.css")

interface IProps {
  title: string
}

const App: StatelessComponent<IProps> = (props) => (
  <h1 className={styles.title}>{props.title}</h1>
)

export default App
