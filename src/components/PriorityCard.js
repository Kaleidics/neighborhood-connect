import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  grid: 100px / 1fr 5fr
  border: solid 1px #ccc;
`;

const Priority = ({ title, description, rank }) => {
  return (
    <CardWrapper>
      <span>{rank}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardWrapper>
  );
};

Priority.propTypes = {};

export default Priority;
