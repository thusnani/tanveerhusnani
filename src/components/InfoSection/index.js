import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ButtonElements';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    ArrowForward,
    ArrowRight
} from './InfoElements';

import { TweenMax, Power3 } from 'gsap'; 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    buttonLink,
    buttonDisplay,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {

    let textItem = useRef(null);
    let imgItem = useRef(null);
    let wrapperItem = useRef(null); 

    useEffect(() => {

        // register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        
        TweenMax.from(textItem, 3, {
            scrollTrigger: {
                trigger: wrapperItem,
                toggleActions: 'restart none none none'
            },
            opacity: 0,
            x: 400,
            ease: Power3.easeOut
        }, 0)

        TweenMax.from(imgItem, 3, {
            scrollTrigger: {
                trigger: wrapperItem,
                toggleActions: 'restart none none none'
            },
            opacity: 0,
            x: 400,
            ease: Power3.easeOut
        }, 0)

    }, [])

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper ref={el => { wrapperItem = el }}>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper ref={el => { textItem = el }}>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                {buttonDisplay ? <BtnWrap>
                                    <Button to={buttonLink}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                                    >{buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                                </BtnWrap> : ''}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap ref={el => { imgItem = el }}>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
