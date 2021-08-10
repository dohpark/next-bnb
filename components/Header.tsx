import React from "react";
import styled from "styled-components";
import Link from "next/link";

import useModal from "../hooks/useModal";
import SignUpModal from "./auth/SignUpModal";
import palette from "../styles/palette";
import AirbnbLogoIcon from "../public/static/svg/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo_text.svg";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0 0, 0.08) 0px 1px 12px;
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    justify-content: center;
    .header-logo {
      margin-right: 6px;
    }
  }

  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: rgba(0, 0 0, 0.18) 0px 1px 2px;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
  }
`;

const Header: React.FC = () => {
  const { openModal, ModalPortal } = useModal();

  return (
    <Container>
      <Link href="/">
        <div className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </div>
      </Link>

      <div className="header-auth-buttons">
        <button
          type="button"
          className="header-sign-up-button"
          onClick={openModal}
        >
          회원가입
        </button>
        <button type="button" className="header-login-button">
          로그인
        </button>
      </div>
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </Container>
  );
};

export default Header;
