import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'
import Button from '../../../Button';


const Title = styled.h2`
    font-size: ${props => props.theme.fontxxxl};
    text-transform: capitalize; // каждое слово с большой буквы
    width:80%;
    color: ${props => props.theme.text};
    align-self: flex-start;

`

const Title1 = styled.h2`
    margin-top: -0.5vh;
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize; // каждое слово с большой буквы
    width:80%;
    color: ${props => props.theme.text};
    align-self: flex-start;
    white-space: pre-line;

    span{
        text-transform: capitalize;
    }
    .text-1{
        color:#DD6B20;
        font-size: ${props => props.theme.fontxl};
    }
    .text-2{
        color: #3182CE;
        font-size: ${props => props.theme.fontxl};
    }
`
const SubTitle = styled.h3`
    font: ${props => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight:600; //Жирность текста
    margin-bottom:1 rem;
    width:80%;
    align-self:flex-start;

    .sui{
        color: #3182CE;
    }
`

const ButtonContainer = styled.div`
    width:80%;
    align-self:flex-start;
    margin-top: 3vh;
`

function TypeWriter(props) {
    return (
        <>
            <Title>
                Hungry Kitties
            </Title>

            <Title1>
                <Typewriter
                    options={{
                        autostart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class = "text-1">Charity NFT Project</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class = "text-2">Mew Mew!</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Title1>
            <SubTitle>
                Built on <span class='sui'> Sui </span>
            </SubTitle>
        </>
    );
}

export default TypeWriter;