import React, { Component } from "react";

import Header from "./components/header/header";
import Content from "./components/content/content";
import Chart from "./components/chart/chart";
import Footer from "./components/footer/footer";
import CountryPicker from "./components/countryselector/countrypicker";
import BarChart from "./components/barchart/barchart";

import "./appStyle.css";

import "bootstrap/dist/css/bootstrap.css";

import { getData } from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount(country) {
    const codvidData = await getData();
    this.setState({ data: codvidData, country: country });
  }

  handleCountryChange = async (country) => {
    const codvidData = await getData(country);
    this.setState({ data: codvidData, country: country });
    console.log(country);
  };
  render() {
    const { data, country } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <div className="container">
          <div className="row row-cols-4">
            <div className="col-6 col-md-6 col-sm-12">
              <Content data={data} />
            </div>
            <div className="col-6 col-md-6 col-sm-12">
              <h4 className="text-danger">{`${country} chart`}</h4>
              <BarChart data={data} country={country} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="text-danger">GLOBAL CHART</h4>
              <Chart />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default App;
