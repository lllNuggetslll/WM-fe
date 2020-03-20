import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { mobileBreakPoint } from "./../../constants/breakPoints";

const ImgWrapper = styled.div`
  margin-top: 4px;

  img {
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
  }

  @media only screen and (max-width: ${mobileBreakPoint}) {
    margin: 0;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const Avatar = ({ img, width, height }) => (
  <ImgWrapper width={width} height={height}>
    <img src={img} alt="listing img" />
  </ImgWrapper>
);

Avatar.propTypes = {
  img: string,
  width: string,
  height: string
};

Avatar.defaultProps = {
  img: "",
  width: "70px",
  height: "70px"
};

export default Avatar;
