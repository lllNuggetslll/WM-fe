import React from "react";
import styled from "styled-components";

const AddressContainer = styled.div`
  margin-top: 20px;
  margin-left: 5px;
  line-height: 30px;
`;

const BusinessAddress = ({ listing }) => {
  return (
    <AddressContainer>
      <div>{listing.address}</div>
      <div>
        <span>{listing.city}, </span>
        <span>{listing.state}, </span>
        <span>{listing.zip_code}</span>
      </div>
      <div>{listing.phone_number}</div>
    </AddressContainer>
  );
};

export default BusinessAddress;
