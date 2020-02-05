import * as React from "react"
import { BrowserRouter, HashRouter, Route, Switch, Link } from "react-router-dom"
import Home from "./Home"
import Footer from "./src/components/Footer"
import Navigator from "./src/components/Navigator"
import GameSelecting from "./src/components/GameSelecting"
import "./App.css"

const App = () => {
  return (
    <>
      <h1 className="main">상혁의 React 게임</h1>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/game/:name" component={GameSelecting} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
