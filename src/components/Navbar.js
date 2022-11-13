import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "NeoWriter";
  font-size: 2rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: url(./cursor-file/cursor.cur);
  box-sizing: border-box;
`;
const LinkColor = styled.link`
  color: red;
`;

export default function Navbar() {
  return (
    <>
      <ul>
        <Li>
          {" "}
          <Link to="/sweeping">Sweeping </Link>
        </Li>
        <Li>
          <Link to="/alternate">Alt Picking </Link>
        </Li>
        <Li>
          <Link to="/legato">Legato Hammer/Pull off </Link>
        </Li>
      </ul>
    </>
  );
}
