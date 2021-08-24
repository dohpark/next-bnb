import React from "react";
import styled from "styled-components";
import Link from "next/link";

import HeaderAuths from "./HeaderAuths";
import HeaderUserProfile from "./HeaderUserProfile";
import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/logo_text.svg";
import { useSelector } from "../store";

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
`;

const Header: React.FC = () => {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <Container>
      <Link href="/">
        <div className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </div>
      </Link>

      {!isLogged && <HeaderAuths />}
      {isLogged && <HeaderUserProfile />}
    </Container>
  );
};

export default Header;
