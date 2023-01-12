import React from 'react'
import styled from 'styled-components'
import HeroSides from './HeroSides'


const Container = styled.div`
background-color: #C7B0E8;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
.left__hero{
  height: 20rem;
  width: 30rem;
  transform: perspective(500px) rotateY(45deg);
  background-color: white;
  border-radius: 50px;
}

.text__hero{
}

`
export default function Hero() {
 
  return (
    <Container>

    <div className='left__hero'><HeroSides text="Hey , am telling you this because i really need people to listen and answer my questions ..." user ="John Doe" /></div>
           <center><div className='text__hero'>
                <h1>WE READ , WE LISTEN , WE TELL </h1>
            </div></center> 
          
    </Container>
  )
}
