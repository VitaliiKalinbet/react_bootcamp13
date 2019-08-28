import React from 'react';
import { StyledItem, StyledList } from './TechList.styled.js';

const TechList = ({ items, color }) => (
    <StyledList bgColor={color} >
      {items.map(item => (
        <StyledItem key={item.id} bgColorLi="green">
            <span>
                {item.name}
            </span>
        </StyledItem>
      ))}
    </StyledList>
  );

export default TechList;
