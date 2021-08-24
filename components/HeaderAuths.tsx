import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import palette from "../styles/palette";
import useModal from "../hooks/useModal";
import { authActions } from "../store/auth";
import AuthModal from "./auth/AuthModal";

const SignUpButton = styled.button`
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
`;

const LoginButton = styled.button`
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
`;

const HeaderAuths: React.FC = () => {
  const { openModal, ModalPortal, closeModal } = useModal();
  const dispatch = useDispatch();

  return (
    <div>
      <SignUpButton
        onClick={() => {
          dispatch(authActions.setAuthMode("signup"));
          openModal();
        }}
      >
        회원가입
      </SignUpButton>
      <LoginButton
        onClick={() => {
          dispatch(authActions.setAuthMode("login"));
          openModal();
        }}
      >
        로그인
      </LoginButton>

      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </div>
  );
};

export default HeaderAuths;
