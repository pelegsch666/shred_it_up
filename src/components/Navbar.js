import React from "react";
import styled ,{css} from "styled-components";
import {Link} from "react-router-dom"


const Li = styled.li`
display: flex;
flex-direction: column;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
color: #58FCFE;
font-family: 'NeoWriter';
font-size: .9rem;
border:0;
border-radius: 5px;
height: 40px;
padding: 0 20px;
cursor: pointer;
box-sizing: border-box;
`




export default function Navbar(){
return (

  
  <>
 


<ul>
  <Li> <Link to="/">Sweeping </Link></Li>
  <Li><Link to="/alternate">Alt Picking </Link></Li>
  <Li><Link to="/legato">Legato Hammer/Pull off </Link></Li>
  
</ul>

</>
)

}