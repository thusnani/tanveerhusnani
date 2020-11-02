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
} from './InfoElements'
import { TweenMax, Power3 } from 'gsap';


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

    useEffect(() => {
        console.log(textItem);
        console.log(imgItem);
        TweenMax.from(textItem, 1.5, { opacity: 0, x: 1000, ease: Power3.easeIn, delay: 0.8 })
        TweenMax.from(imgItem, 1.5, { opacity: 0, x: 1000, ease: Power3.easeIn })
    }, [])

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper ref={el => {textItem = el}}>
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
                            <ImgWrap ref={el => {imgItem = el}}>
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
