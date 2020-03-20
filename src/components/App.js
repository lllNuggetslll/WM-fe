import React, { Component } from "react";
import { object, bool, func } from "prop-types";
import { connect } from "react-redux";
import { locate, fetchListing } from "../actions/actions";
import logo from "../assets/logo.png";
import { Modal } from "./modal";
import Loader from "./loader";
import { setParams, getParams } from "./../utils/urlUtils";
import HeroSection from "./hero_section";
import AppContent from "./app_content";
import styled from "styled-components";

export const AppHeader = styled.div`
  min-height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  img {
    width: 110px;
    height: 25px;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 520px;
  margin-bottom: 20px;
  text-align: center;
`;

export class App extends Component {
  componentDidMount() {
    const {
      locate,
      fetchListing,
      history: {
        location: { search }
      },
      getParams
    } = this.props;
    const loc = getParams("location", search);
    const listing = getParams("listing", search);

    if (loc) {
      const [latitude, longitude] = loc.split(",");

      locate({ latitude, longitude });
    }

    if (listing) {
      fetchListing(listing);
    }
  }

  locateMe = () => {
    const { locate, setParams } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = setParams({
          param: "location",
          query: `${latitude},${longitude}`
        });
        locate(position.coords);

        this.props.history.push(`?${url}`);
      });
    }
  };

  render() {
    const { isLocating, location, regions, error, fetchListing } = this.props;

    return (
      <AppWrapper>
        <Modal />
        <Loader isLoaded={!isLocating} />
        <AppHeader>
          <img src={logo} alt="weedmaps logo" />
        </AppHeader>
        <HeroSection {...{ location, isLocating }} locateMe={this.locateMe} />
        <AppContent {...{ regions, error, fetchListing }} />
      </AppWrapper>
    );
  }
}

App.defaultProps = {
  // for testing, so i can pass in mock funcs
  getParams,
  setParams,
  isLocating: false,
  location: {},
  regions: {},
  error: {}
};

App.propTypes = {
  isLocating: bool.isRequired,
  location: object,
  regions: object,
  error: object,
  locate: func.isRequired,
  fetchListing: func.isRequired,
  history: object.isRequired,
  getParams: func.isRequired,
  setParams: func.isRequired
};

const mapStateToProps = state => state.location;
// For testing without redux
export { App as TestApp };

export default connect(mapStateToProps, { locate, fetchListing })(App);
