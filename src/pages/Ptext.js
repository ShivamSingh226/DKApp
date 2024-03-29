import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0;
  margin-top:2px;
  margin-bottom:2px;
  font-size: 1rem;
  line-height: 1.3em;
  display:flex;
  flex-direction:column;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}