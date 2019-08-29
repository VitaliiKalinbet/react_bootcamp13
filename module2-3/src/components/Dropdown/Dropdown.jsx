import React from 'react';
import styled from 'styled-components';

console.log('styled :', styled);

const Container = styled.div`
    position: relative;
    display: inline-block;
`;
const HamburgerButton = styled.button`
  padding: 0;
  width: 50px;
  border: 0;
  background-color: ${(props) => props.buttonColor};
  color: #333;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
`;
const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
  z-index: 999;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  padding: 8px 12px;
  :hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;


const Dropdown = ({ isOpen, buttonColor }) => (
    <Container>
        <HamburgerButton type="button">
            &#9776;
        </HamburgerButton>

        {isOpen && <DropdownContainer >
            <List>
                <ListItem>Option 1</ListItem>
                <ListItem>Option 2</ListItem>
                <ListItem>Option 3</ListItem>
                <ListItem>Option 4</ListItem>
            </List>
        </DropdownContainer> 
        }
    </Container>
)

export default Dropdown;