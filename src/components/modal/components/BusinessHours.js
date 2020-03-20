import React from "react";
import styled from "styled-components";

const Table = styled.table`
  th {
    text-align: initial;
    min-width: 100px;
  }
  @media only screen and (max-width: 750px) {
    margin-top: 20px;
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
          <tr>
            <td>{capitalizedDay}</td>
            <td>{hours[day].open}</td>
            <td>{hours[day].close}</td>
          </tr>
        );
      })}
    </Table>
  );
};

export default BusinessHours;
