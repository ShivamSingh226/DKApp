import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer=styled.footer`
 background-color: #101522;
`;
export const FooterWrap=styled.div`
padding: 24px 12px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`;
export const FooterLinksContainer=styled.div`
display:flex;
justify-content:center;
@media screen and (max-width: 820px){
    padding-top:32px;
}
`;
export const FooterLinksWrapper= styled.div`
display:flex;
margin-left:25px;
@media screen and (max-width:840 px){
    flex-direction:column;
}
`;
export const FooterLinkItems=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:24px;
margin-top:10px;
text-align:left;
width:200px;
box-sizing: border-box;
color:#fff;
.hyper__link{
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 3rem;
    text-decoration: none;
    color:#fff;
}
.hyper__link:hover{
    color:#01bf71;
    cursor:pointer;
}
@media screen and (max-width:420 px){
    margin: 0;
    padding:10px;
    width:100%;
}
`;
export const FooterLinkTitle=styled.h1`
font-size:16px;
margin-bottom: 16px;
`;
export const FooterLink=styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom:0.3rem;
margin-top:0.3rem;
font-size: 16px;
&:hover{
    color:#01bf71;
    transition:0.3s ease-out;
}
`;
export const WebsiteRights=styled.div`
color:#fff;
margin-bottom: 16px;
`
export const Lbtn=styled.div`
margin-top:20px;
`

