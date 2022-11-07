import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './Ptext'
const FooterStyles=styled.div`
padding-top:10rem;

margin-bottom:0;
background-color:#1E1E1E;
.container{
    display:flex;
    gap:3rem;
}
.footer__col1{
    flex:2;
}
.footer_col2,.footer_col3{
    flex:1;
}
.footer__col1__title{
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
@media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`
function Footer() {
  return (
    <FooterStyles>
    <div className="container">
        <div className="footer__col1">
            <h1 className="footer__col1__title">Diyakaran Enterprises LLP</h1>
            <PText>
                Authorised distributors for Anthem Biosciences,Bangalore.
                Involved in Trading and distribution of Active Pharmaceutical Ingredients,Nutritional extracts,Vitamin Analogues, Enzymes.
            </PText>
        </div>
        <div className="footer__col2">
        <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Our Products',
                path: '/Products',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3"><FooterCol
            heading="Contact Info"
            links={[
              {
                title: '9611158000',
                path: 'tel:+919611158000',
              },
              {
                title: 'info@diyakaran.in',
                path: 'mailto:info@diyakaran.in',
              },
              {
                title: 'India',
                path: 'http://google.com/maps',
              },
            ]}
          /></div>
      
    </div>
    </FooterStyles>
  )
}

export default Footer
