import styled, { css } from "styled-components";


export const Form = styled.form`
display: flex;
    flex-direction: column;
    justify-content: space-between;
height: fit-content;
width:fit-content;
max-width: 700px;
padding: 40px;
background-color: #fff;
border-radius: 10px;
box-sizing: border-box;
box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);
    `
export const sharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
`
export const Input = styled.input`
display: block;
width: 100%;
${sharedStyles}
`
export const Button = styled.button`
display: block;
background-color: #1c92d2;
color: #6EFACC;
font-size: .9rem;
border:0;
border-radius: 5px;
height: 40px;
padding: 0 20px;
cursor: pointer;
box-sizing: border-box;
font-family:'NeoWriter';
`
export const DivNoForm = styled.div`
display: flex;
 
    justify-content: space-between;
    align-items: center;
flex-direction: column;
height: fit-content;
width:fit-content;
max-width: 700px;
padding: 40px;
background-color: #fff;
border-radius: 10px;
box-sizing: border-box;
box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);
`
export const DivForMetronome = styled.div`

    display: flex;
    flex-direction: column;
    width: 300px;
    height: 250px;
    justify-content: space-between;

`

