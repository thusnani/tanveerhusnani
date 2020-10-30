import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #010606;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }    
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
        
    text-align: left;
    }       
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottomL 0.5rem;
    font-size: 14px;

    &:hover {
        color: #9C1313;
        transition: 0.3s ease-out;
    }

`


export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    align-items: center;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px:
    margin: 40px aito 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    margin-bottom: 16px;
    font-weight: bold;
`
export const ImageLogo = styled.img`
    width: 30%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

