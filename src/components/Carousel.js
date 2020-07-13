import React, { Component } from "react";

import Card from "../components/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import budgettracker from "../assets/images/budgettracker.png";
import disneyLand from "../assets/images/disneyLand2.jpg";
import noteTaker from "../assets/images/noteTaker.png";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Budget Tracker",
          subTitle: "Easily Track Income & Purchases",
          imgSrc: budgettracker,
          link: "https://devgrub.com",
          selected: false,
        },
        {
          id: 1,
          title: "Curtis Kilgore",
          subTitle: "My Github",
          imgSrc: disneyLand,
          link: "https://github.com/CurtisKil",
          selected: false,
        },
        {
          id: 2,
          title: "Note Taker",
          subTitle: "Take Notes With Express",
          imgSrc: noteTaker,
          link: "https://whispering-brook-92339.herokuapp.com/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
