import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'


const Container = styled.div`
width: 100vw;
height: 100vh;

.Nav {
display: flex;
gap : 1rem;
align-items: center;
justify-content: center;
background-color: #C7B0E8;
border-bottom: 1px solid white;
}
.Logo {
flex : 1;
h2 {
font-size: 1rem;
margin-left : 1.5rem;
font-family: 'Poor Story', cursive;
}
}
.Search {
flex : 3;
display: flex;
align-items: center;
justify-content: center;
input {
width: 50%;
height: 100%;
border: white 1px solid;
padding: 1rem 4rem;
border-radius: 5rem;
background: none;
transition: 0.4s width ease-in-out;
&:focus {
    outline: none;
    width: 100%;
}
color : black;
&::placeholder {
    font-size: 1rem;
    color: black;
    font-family: 'Poor Story', cursive;
}
}
svg {
font-size: 1rem;
color: black;
margin: 0 1rem;
transform: translateX(3.5rem);
}
}
.Actions {
button {
cursor: pointer;
margin: 1.5rem;
padding: 0.5rem 2rem;
color: white;
background : none;
border: 1px solid white;
border-radius: 5rem;
transition: 0.4s ease-in-out;
&:hover {
    background-color: white;
    color: #b3b3b3;
}
&:nth-child(2){
    background-color: white;
    color: #b3b3b3;
}
}
}

`
export default function Layout(props) {

  
  return <>
    <Container>
            <div className='Nav'>
                    <div className='Logo'>
                            <h2>TAKE MY EXPERIENCE</h2>
                    </div>
                    <div className='Search'>
                            <AiOutlineSearch />
                            <input type='text' placeholder='Usernames , Stories ...' />
                    </div>
                    <div className='Actions'>
                            <button>LOG IN </button>
                            <button>SIGN UP </button>
                    </div>
            </div>
            <main>{props.children}</main>
    </Container>
   
  </>
}
;
