import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledNavBar = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
  }

  div > * {
    margin: 1%;
  }


  .links {
    width: 100%; 
  }
`;

const NavBar = ({ onLogoutClick }) => {
  return (
    <StyledNavBar>
      <div>
        <Link to="/">
          <button onClick={onLogoutClick}>Logout</button>
        </Link>

        {localStorage.getItem("token") ? (
          <div className="links">
            <Link to="/user">
              <button>Search Friends</button>
            </Link>
            <Link to="/user">
              <button>Create Friends</button>
            </Link>
            <Link to="/user">
              <button>Update A Friend</button>
            </Link>
            <Link to="/user">
              <button>Delete Friend</button>
          </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
