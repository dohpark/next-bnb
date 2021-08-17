import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import GreenCheckIcon from "../../public/static/svg/auth/GreenCheckIcon.svg";
import RedXIcon from "../../public/static/svg/auth/RedXIcon.svg";

const Container = styled.p<{ isValid: boolean }>`
  color: ${({ isValid }) =>
    isValid ? palette.davidson_orange : palette.green};
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`;

interface PasswordWarningProps {
  isValid: boolean;
  text: string;
}

const PasswordWarning: React.FC<PasswordWarningProps> = ({ isValid, text }) => (
  <Container isValid={isValid}>
    {isValid ? <RedXIcon /> : <GreenCheckIcon />}
    {text}
  </Container>
);
export default PasswordWarning;
