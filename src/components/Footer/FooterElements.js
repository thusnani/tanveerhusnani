import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #010606;
`

export const FooterWrap = styled.div`
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
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
    margin: auto auto auto auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    font-weight: bold;
    justify-content: center;
    max-height: 80px;
    max-width: 80px;
`

const spinAnimation = keyframes`
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(90deg); }
    100% { transform: rotateY(0deg); }
`

export const ImageLogo = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    align-items: right;
/*     animation-name: ${spinAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite; */
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    margin-bottom: 16px;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

