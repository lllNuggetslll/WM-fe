import React from "react";
import { object, func } from "prop-types";
import styled from "styled-components";
import get from "lodash.get";
import Avatar from "./../../avatar";
import CardDetails from "./../../card_details";
import { mobileBreakPoint } from "./../../../constants/breakPoints";

const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardDetailsWrapper = styled.div`
  margin-top: 10px;
  font-size: 20px;
  line-height: 40px;

  @media only screen and (max-width: ${mobileBreakPoint}) {
    line-height: initial;
    margin-left: 20px;
  }
`;

const CardInfoWrapper = styled.div`
  min-width: 200px;
`;

const TimesContainer = styled.div`
  font-size: 40px;
  opacity: 0.25;
  cursor: pointer;
`;

const ModalHeader = ({ listing, onCloseModal }) => {
  return (
    <ModalHeaderWrapper>
      <div style={{ display: "flex" }}>
        <Avatar
          img={`${get(listing, "avatar_image.small_url")}`}
          width={100}
          height={100}
        />
        <CardDetailsWrapper>
          <CardInfoWrapper>
            <CardDetails {...{ listing }} />
          </CardInfoWrapper>
        </CardDetailsWrapper>
      </div>
      <TimesContainer>
        <i
          data-testid="xIcon"
          className="fas fa-times"
          onClick={onCloseModal}
        />
      </TimesContainer>
    </ModalHeaderWrapper>
  );
};

ModalHeader.propTypes = {
  listing: object.isRequired,
  onCloseModal: func.isRequired
};

export default ModalHeader;
