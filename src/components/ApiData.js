import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class ApiData extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.props.apiData.map((value, index) => {
          return (
            <Card
              key={index}
              style={{
                width: "18rem",
                margin: "20px",
                border: "1px solid gray",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Card.Img variant="top" src={value.strDrinkThumb} alt={value.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{value.strDrink}</Card.Title>
                <Button onClick={() => this.props.addToFav(value)} variant="primary">
                  Add to favorite
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default ApiData;
