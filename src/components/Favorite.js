import React, { Component } from "react";
import axios from "axios";
import OneFavData from "./OneFavData";
import UpdateForm from "./UpdateForm";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${process.env.REACT_APP_SERVER_URL}/drink/fav`,
      showFavData: false,
      favData: [],
      showForm: false,
      id: 0,
      strDrink: "",
      strDrinkThumb: "",
    };
  }
  ////////////// Get Database Data //////////////
  componentDidMount = () => {
    axios.get(this.state.url).then((axiosRes) => {
      this.setState({
        favData: axiosRes.data,
        showFavData: true,
      });
    });
  };
  ////////////// Delete from Database Data //////////////
  deleteFav = (id) => {
    console.log(id);
    axios.delete(`${this.state.url}/${id}`).then(() => {
      axios.get(this.state.url).then((axiosRes) => {
        this.setState({
          favData: axiosRes.data,
          showFavData: true,
          showForm: false,
        });
      });
    });
  };
  ////////////// Show Update Form //////////////
  setShowUpdateForm = (id) => {
    this.setState({
      showForm: !this.state.show,
      id: id,
    });
  };
  //////////////  Update Data On change  //////////////
  setStrDrink = (e) => this.setState({ strDrink: e.target.value });
  setStrDrinkThumb = (e) => this.setState({ strDrinkThumb: e.target.value });
  //////////////  Update Data On Database  //////////////
  updateData = (e) => {
    e.preventDefault();
    axios
      .put(`${this.state.url}/${this.state.id}`, {
        strDrink: this.state.strDrink,
        strDrinkThumb: this.state.strDrinkThumb,
      })
      .then(() => {
        axios.get(this.state.url).then((axiosRes) => {
          this.setState({
            favData: axiosRes.data,
            showFavData: true,
            showForm: false,
          });
        });
      });
  };
  ////////////// Close Update Form  //////////////
  handleClose = () => {
    this.setState({
      showForm: false,
    });
  };
  ////////////// Render function //////////////
  render() {
    return (
      <div>
        {this.state.showForm && (
          <UpdateForm
            setStrDrink={this.setStrDrink}
            setStrDrinkThumb={this.setStrDrinkThumb}
            showForm={this.state.showForm}
            handleClose={this.handleClose}
            updateData={this.updateData}
          />
        )}
        {this.state.showFavData && (
          <OneFavData
            favData={this.state.favData}
            deleteFav={this.deleteFav}
            setShowUpdateForm={this.setShowUpdateForm}
          />
        )}
      </div>
    );
  }
}

export default Main;
