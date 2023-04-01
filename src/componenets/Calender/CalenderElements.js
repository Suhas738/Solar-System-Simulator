import styled from 'styled-components';
import Calendar from "react-calendar";
export const CalendarContainer = styled.div `

display:flex;
align-items:center;
justify-content:center;
background:black;
background-color:black;
color:aqua;
padding-top:150px;
padding-bottom:00px;


`

export const CalenderSize = styled.div`

height:100%;
width:100%;
`

export const CalenderWrapper = styled.div `


margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr ;
align-items:center;
grid-gap:16px;
padding:0 40px;
background:black;


@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 60px;
}
`
export const CalenderCard = styled.div `

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;
height:100px;
background-color:black;
border:1px solid;
border-color:#01bf71;
&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}



`

export const StarContainer = styled.div `


align-items:center;
justify-content:center;
background:black;
background-color:black;
color:aqua;
padding-top:08px;
padding-bottom:30px;


`

export const StarSize = styled.div`

height:100%;
width:100%;
`

export const StarWrapper = styled.div `


margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr;
grid-gap:16px;
padding:0 30px;
background:black;


@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 60px;
}
`
export const StarWrapper1 = styled.div `


margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
grid-gap:16px;
padding:0 30px;
background:black;


@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 60px;
}
`
export const StarCard = styled.div `
background:white;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:10px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;
height:240px;
background-color:black;
border:1px solid;
border-color:#01bf71;
width:283px;

color:black;
&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}



`

export const StarCard1 = styled.div `
background:white;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:10px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;
height:140px;
background-color:black;
border:1px solid;
border-color:#01bf71;
width:233px;

color:black;
&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}



`


export const StarImg = styled.img `

height:130px;
width:200px;
margin-bottom:00px;
margin-top:10px;
border-radius:10px;

`

export const StarLink = styled.a `

text-decoration:none;
`

export const StarSection = styled.section`

background:black;

`

export const StarH1 = styled.h1 `
font-size:3.5rem;

margin-bottom:10px;
margin-top:100px;
align-items:center;
justify-content:center;
color:#01bf71;

@media screen and(max-width:480px){

    font-size:2rem;
}
`
export const StarH2 = styled.h2 `

font-size:1.5rem;
margin:10px;

color:#01bf71;
`

export const Starinput = styled.div`

align-items:center;
justify-content:center;
height:20px;
width:1500px;

`

export const FormInput = styled.input `

padding:16px 16px;
Width:500px;
margin-bottom:22px;
border:none;
border-radius:4px;
border:1px solid;
border-color:#00985a;
`