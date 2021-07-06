import React, { Component } from "react";
import axios from "axios";
import ApiData from "./ApiData";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${process.env.REACT_APP_SERVER_URL}/drink`,
      showApiData: false,
      apiData: [],
    };
  }
  ////////////// Get API Data //////////////
  componentDidMount = () => {
    axios.get(this.state.url).then((axiosRes) => {
      this.setState({
        apiData: axiosRes.data,
        showApiData: true,
      });
    });
  };
  ////////////// Add to Favorite function //////////////
  addToFav = (value) => {
    axios.post(`${this.state.url}/fav`, value);
  };
  ////////////// Render function //////////////
  render() {
    return <div>{this.state.showApiData && <ApiData apiData={this.state.apiData} addToFav={this.addToFav} />} </div>;
  }
}

export default Main;
