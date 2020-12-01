import React, { useRef, useEffect } from 'react';
import logo from '../../images/tanveer_husnani_logo.png';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    ImageLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

import { TweenMax, Power3 } from 'gsap';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {

    let wrapperItem = useRef(null);

    useEffect(() => {
        // register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        TweenMax.from(wrapperItem, 3, {
            scrollTrigger: {
                trigger: wrapperItem,
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            ease: Power3.easeOut
        }, 0)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap ref={el => { wrapperItem = el }}>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <ImageLogo src={logo} alt="logo" />
                        </SocialLogo>
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
                        <WebsiteRights>TanveerHusnani.ca © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
