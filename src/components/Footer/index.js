import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    MdEmail, 
    MdLocationOn, 
    MdEmojiPeople,
    MdContactMail 
} from "react-icons/md";
import { AiFillFilePdf, AiFillProject } from "react-icons/ai";
import { 
    FaFacebook, 
    FaGithub, 
    FaInstagram, 
    FaLinkedinIn, 
    FaTwitter,
    FaMicroblog
} from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterContent,
    FooterP,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterContent>
                            <FooterLinkTitle>Welcome to Keith's portfolio website</FooterLinkTitle>
                            <FooterP>Thanks for visiting my portfolio website! </FooterP>
                            <FooterP>I am a Software Engineer who loves coding. </FooterP>
                            <FooterP>If you like me or want to work with me, feel free to contact me.</FooterP>
                        </FooterContent>
                        <FooterLinkItems>
                            <FooterLinkTitle>Useful Links</FooterLinkTitle>
                            <FooterLink to="/about">
                                <MdEmojiPeople /> About
                            </FooterLink>
                            <FooterLink to="/projects-details">
                                <AiFillProject /> Projects
                            </FooterLink>
                            <FooterLink to="/blogs">
                                <FaMicroblog /> Blogs
                            </FooterLink>
                            <FooterLink to="/resume">
                                <AiFillFilePdf /> Resume
                            </FooterLink>
                            <FooterLink to="/contact">
                                <MdContactMail /> Contact
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Keep in Touch</FooterLinkTitle>
                            <FooterP>
                                <MdEmail />keith.hoka@gmail.com
                            </FooterP>
                            <FooterP>
                                <MdLocationOn /><br/>Sydney, Australia.
                            </FooterP>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>KH</SocialLogo>
                        <WebsiteRights>Keith HO @ {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//facebook.com/keith.k.ho.7" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//instagram.com/keith.k.ho.7" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//github.com/Keith-hoka" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//linkedin.com/in/keithhoka" target="_blank" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </SocialIconLink>
                            <SocialIconLink href="//twitter.com/Keith11781155" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
