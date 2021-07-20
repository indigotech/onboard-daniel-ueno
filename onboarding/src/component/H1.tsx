import React from 'react';
import styled from 'styled-components';

export const H1: React.FC = (props) => {
  return <StyledH1>{props.children}</StyledH1>;
};

const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin: 20px 0;
`;
