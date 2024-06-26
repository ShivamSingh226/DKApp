import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/Map.png';
const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
    
  }
  .card{
    font-size: 25px;
    color:#fff;
  }
  
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    
  }
  .map__card__heading {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color:#fff;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 3rem;
    text-decoration: none;
    color:#fff;
  }
  .map__card__link:hover{
    color:#01bf71;
    cursor:pointer;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;



export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">We are here</h3>
          <div className='card'>
          <p>Diyakaran Enterprises LLP</p>
          </div>
          <div className='fcard'>
          <a
            className="map__card__link"
            href="https://goo.gl/maps/nuFxVai1243gwSQa8"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
          </div>
          
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}