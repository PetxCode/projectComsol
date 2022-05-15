import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import styled from "styled-components";

const CatHeader = () => {
  const [toggle, setToggle] = React.useState(true);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Container>
        <Nav1>All</Nav1>
        <Nav>Health</Nav>
        <Nav>Education</Nav>
        <Nav>Dance</Nav>
        <Nav>Charity</Nav>
        <Nav>Communities</Nav>
      </Container>
      <Drop>
        {toggle ? (
          <Menu
            onClick={() => {
              document.getElementById("dropDown").style.height = "250px";
              onToggle();
            }}
          >
            Select Category
            <MdArrowDropDown />
          </Menu>
        ) : (
          <Menu
            onClick={() => {
              document.getElementById("dropDown").style.height = "0";
              onToggle();
            }}
          >
            Select Category
            <MdArrowDropUp />
          </Menu>
        )}
        <DropDown id="dropDown">
          <MNav>All</MNav>
          <MNav>Health</MNav>
          <MNav>Education</MNav>
          <MNav>Dance</MNav>
          <MNav>Charity</MNav>
          <MNav>Communities</MNav>
        </DropDown>
      </Drop>
    </>
  );
};

export default CatHeader;

const Container = styled.div`
  /* width: 100%; */
  padding: 50px 200px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav1 = styled.div`
  background-color: #1e4c3d;
  color: white;
  padding: 4px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

const Nav = styled.div`
  color: #1e4c3d;
  padding: 4px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

const Drop = styled.div`
  display: none;
  padding: 20px;
  margin-top: 20px;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffb850;
`;

const DropDown = styled.div`
  width: 200px;
  height: 0;
  background-color: #1e4c3d;
  position: absolute;
  top: 50px;
  transition: all 350ms;
  overflow: hidden;
  color: white;
  border-radius: 3px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MNav = styled.div`
  margin: 5px;
  border-radius: 1px;
  padding-left: 5px;
  background: rgba(252, 252, 252, 0.1);
`;
