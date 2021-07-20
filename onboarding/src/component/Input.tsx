import React from 'react';
import styled from 'styled-components';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledInput>{props.children}</StyledInput>;
};

const StyledInput = styled.input`
  width: 170px;
  height: 22px;
  border-radius: 8px;
  border: 1px solid #777777;
`;
