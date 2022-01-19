import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarRoute,
    SideBtnWrap,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen= { isOpen } onClick={ toggle }>
                <Icon onClick={ toggle }>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={ toggle }>About</SidebarLink>
                        <SidebarLink to="projects" onClick={ toggle }>Projects</SidebarLink>
                        <SidebarLink to="tech-stack" onClick={ toggle }>Tech Stack</SidebarLink>
                        <SidebarLink to="blogs" onClick={ toggle }>Blogs</SidebarLink>
                        <SidebarLink to="resume" onClick={ toggle }>Resume</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/contact">Contact</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
