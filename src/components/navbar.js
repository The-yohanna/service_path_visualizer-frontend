import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  background-color: teal;
  align-items: center;
  justify-content: flex-center;
  color: white;
  height: 60px;
  width: 200px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>SERVICE PATH VISUALIZER</Left>
        <Center>
          <Link to="/summaryview" style={{ textDecoration: "none" }}>
            <MenuItem>SUMMARY VIEW</MenuItem>
          </Link>
          <Link to="/listview" style={{ textDecoration: "none" }}>
            <MenuItem>LIST VIEW</MenuItem>
          </Link>
        </Center>
        <Right>
          <MenuItem>SETTINGS</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
