import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from './Carousel';


const Section = styled.section`
    min-height: 100vh;
    width:100%;
    background-color: white;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 64em) {
        background-color: black;
    }
`

const Container = styled.div`
    width:85%;
    min-height: 80vh;
    margin: 0 auto; //
    background-color: black;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;

    @media (max-width: 70em) {
        width: 85%;

        &>*:last-child{
            width: 80%;
        }
    }


    @media (max-width: 64em) {
        width: 100%;
        border-radius: 0px;
        flex-direction: column;
        gap: 0vh;

        &>*:last-child{
            width: 80%;
            margin-top: -0vh ;
        }
    }

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 64em) {
        width: 80%;
        height: 50%;

    }
    
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: #DD6B20;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 64em) {
        align-self: center;
        text-align: center;
        font-size: 5vw;

    }
`

const SubText = styled.p`
    font-size: 1.25vw;
    text-transform: none;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
    @media (max-width: 64em) {
        align-self: center;
        text-align: center;
        font-size: 2vw;
    }
`

const SubTextLight = styled.p`
    font-size: 1.5vw;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    @media (max-width: 64em) {
        align-self: center;
        text-align: center;

    }
`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 0px solid white;
    width: fit-content;
    @media (max-width: 64em) {
        font-size: 5vw;
        color:#DD6B20;
    }

`

function About() {
    return (
        <Section id="about">
            <MainTitle>
                About
            </MainTitle>
            <Container>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <Title>
                        We are the Hungry Kitties
                    </Title>
                    <SubText>
                    We want to help animals and make the world kinder for this we make the process of donating funds as convenient as possible, and most importantly, an emotionally memorable event. 
We decided to make our first NFT charity collection on Sui.We will distribute 70 percent of the income from the mint to shelters and animal welfare funds. By purchasing our NFT, a person will automatically donate money to shelters with which we cooperate.At the time of the website's release, there are only 2 shelters, but by the time the NFT is minted, it will be at least 10 shelters.We hope that by implementing this project we will help thousands of animals around the world, because Hungry Kitties is just the beginning of our Hungry Pets universe.
                    </SubText>
                    <SubTextLight>
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default About;