import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 2rem auto;
  padding: 0;
  width: 800px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  border: 1px solid black;
  background-color: ${props => props.bgColor};
`;

export const StyledItem = styled.li`
  color: black;
  padding: 2rem;
  background-color: ${props => props.bgColorLi};
  :focus,
  :hover {
    background-color: red;
    color: white;
  }
`;