import * as React from "react"
import * as ReactDOM from "react-dom"
import { hot } from "react-hot-loader/root"

import Gugudan from "./Gugudan"

const Hot = hot(Gugudan)

ReactDOM.render(<Hot />, document.getElementById("root"))
