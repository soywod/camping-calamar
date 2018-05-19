import React, {Fragment, StatelessComponent} from "react"

import Navbar from "./navbar/Navbar"

require("./App.sass")

const App: StatelessComponent<{}> = (props) => (
  <Navbar />
)

export default App
