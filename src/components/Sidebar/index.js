import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='/'onClick={toggle}>
                 Home
            </SidebarLink>
            <SidebarLink to='/Products' onClick={toggle}>
                 Our Products
            </SidebarLink>
            <SidebarLink to='/about' onClick={toggle}>
                 About Us
            </SidebarLink>
            <SidebarLink to='/contact'onClick={toggle}>
                 Contact Us
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/write'>Get in Touch</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
