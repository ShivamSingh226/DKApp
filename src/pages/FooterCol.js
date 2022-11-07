import React from 'react'
import styled from 'styled-components'
import{Link} from 'react-router-dom'
const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
    text-decoration:none;
  }
`;
function FooterCol({
    heading='col heading',
    links=[
       { type:'Link',
        title:'Home',
        path:'/',
    },
    {
        type:'Link',
        title:'Our Products',
        path:'/Products'
    },
    ],

}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
      {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  )
}

export default FooterCol
