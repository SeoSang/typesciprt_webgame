import * as React from "react"
import { BrowserRouter, HashRouter, Route, Switch, Link } from "react-router-dom"
import Home from "./Home.jsx"
import Footer from "./src/components/Footer.jsx"
import Navigator from "./src/components/Navigator.jsx"
import GameSelecting from "./src/components/GameSelecting.jsx"
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
