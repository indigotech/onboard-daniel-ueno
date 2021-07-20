import React from 'react';
import styled from 'styled-components';

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

const StyledLabel = styled.label`
  margin-bottom: 12px;
  font-size: 12px;
  color: #777777;
`;
