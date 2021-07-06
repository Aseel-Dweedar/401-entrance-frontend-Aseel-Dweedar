import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class OneFavData extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.props.favData.map((value, index) => {
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
                <Button
                  style={{ marginRight: "20px" }}
                  onClick={() => this.props.deleteFav(value._id)}
                  variant="danger"
                >
                  Delete
                </Button>
                <Button onClick={() => this.props.setShowUpdateForm(value._id)} variant="primary">
                  Update Data
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default OneFavData;
