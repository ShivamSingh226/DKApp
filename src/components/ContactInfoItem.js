import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from '../pages/Ptext';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: #D3D3D3;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
  .text{
    font-size:5rem;
    
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="text">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}