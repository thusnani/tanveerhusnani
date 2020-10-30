import React from 'react'
import logo from '../../images/tanveer_husnani_logo.png';
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    ImageLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink
                                href="https://www.linkedin.com/in/tanveerhusnani/"
                                target="_blank"
                                aria-label="LinkedIn">LinkedIn</FooterLink>
                            <FooterLink
                                href="https://github.com/thusnani/tanveerhusnani"
                                target="_blank"
                                aria-label="LinkedIn">GitHub</FooterLink>
                            <FooterLink
                                href="https://www.instagram.com/tdottan/"
                                target="_blank"
                                aria-label="Facebook">Instagram</FooterLink>
                            <FooterLink
                                href="https://www.facebook.com/tanveer.husnani"
                                target="_blank"
                                aria-label="Facebook">Facebook</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <ImageLogo src={logo} alt="logo" />
                        </SocialLogo>
                        <WebsiteRights>TanveerHusnani.ca © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://www.linkedin.com/in/tanveerhusnani/"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                                

                            </SocialIconLink>
                            <SocialIconLink
                                href="https://github.com/thusnani/tanveerhusnani"
                                target="_blank"
                                aria-label="Github"
                            >
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://www.instagram.com/tdottan/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://www.facebook.com/tanveer.husnani"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
