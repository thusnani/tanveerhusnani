import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src="https://tansvideobucket.s3.ca-central-1.amazonaws.com/video.mp4" type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Tanveer Husnani</HeroH1>
                <HeroP>
                    Developer in the making!
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='aboutme'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        About Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
