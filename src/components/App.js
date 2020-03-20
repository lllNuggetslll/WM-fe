import React, { Component } from "react";
import PropTypes from "prop-types";
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
  margin-bottom: 20px;
  text-align: center;
`;

export const Footer = styled.div`
  height: 50px;
  background: #00cdbd;
  width: 100%;
`;

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loadingTimer: 0
    };
  }

  componentDidMount() {
    const {
      locate,
      fetchListing,
      history: {
        location: { search }
      }
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
    const { locate } = this.props;

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
        <Footer />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  error: PropTypes.object
};

App.defaultProps = {
  isLocating: false,
  location: {},
  regions: {},
  error: {}
};

const mapStateToProps = state => state.location;

export default connect(
  mapStateToProps,
  { locate, fetchListing }
)(App);
