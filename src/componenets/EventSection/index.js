import React from 'react'
import {Button} from '../ButtonElements';
import{
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
    Img,BtnLink
} from './InfoElements'

const Infosection = ({LightBg,id,imgStart,topLine,lightText,darkText,description,buttonLabel,headline,img,alt,primary,dark,dark2,link,isSignedIn}) => {
    return (
        <>
            <InfoContainer LightBg={LightBg} id={id}>
                <InfoWrapper>
                  
                     <Column1>
                     <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap  >
                    
                        </BtnWrap>
                     </TextWrapper>
                     </Column1>
                   
                  
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Infosection
