import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Button = styled(LinkR)`

border-radius:50px;
background:${({primary}) => (primary ? '#01BF71' : '#010606')};
white-space:nowrap;
padding:${({big}) => (big ? '14px 48px':'12px 30px')};
color:${({dark}) => (dark ? '#010606': '#ffffff')};
font-size:${({fontbig}) => (fontbig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.2 ease-in-ease-out;
text-decoration:none;


&:hover{

    transition:all 0.2 ease-in-ease-out;
    background:${({primary}) => (primary ? '#ffffff' : '#01BF71')};


}
`