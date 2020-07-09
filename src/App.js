import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Curtis Kilgore",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Home", path: "/home" },
      ],
      home: {
        title: "Full Stack Web Developer",
        subTitle: "Always Learning, Always Growing",
        text: "Checkout My Projects",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Reach Out To Me",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container fluid={true} className="p-0">
          <Navbar className="border-bottom">
            <Navbar.Brand>Curtis Kilgore</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
