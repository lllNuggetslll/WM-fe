import React from "react";
import { object } from "prop-types";
import styled from "styled-components";

const Table = styled.table`
  margin-top: 15px;

  th {
    text-align: initial;
    min-width: 80px;
  }
  @media only screen and (max-width: 750px) {
  }
`;

const BusinessHours = ({ hours }) => {
  return (
    <Table>
      <tr>
        <th>Day</th>
        <th>Opens</th>
        <th>Closes</th>
      </tr>
      {Object.keys(hours).map(day => {
        const capitalizedDay = day.charAt(0).toUpperCase() + day.substring(1);

        return (
          <tr key={capitalizedDay}>
            <td>{capitalizedDay}</td>
            <td>{hours[day].open}</td>
            <td>{hours[day].close}</td>
          </tr>
        );
      })}
    </Table>
  );
};

BusinessHours.propTypes = {
  hours: object.isRequired
};

export default BusinessHours;
