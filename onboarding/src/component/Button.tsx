import React from 'react';
import styled from 'styled-components';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};
export const StyledButton = styled.button`
  font-size: 12px;
  font-weight: regular;
  color: #ffffff;
  background-color: #b100b1;
  height: 44px;
  width: 180px;
  border-radius: 8px;
  margin: 12px 0;
`;
