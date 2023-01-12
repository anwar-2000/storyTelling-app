import React from 'react'
import styled from 'styled-components'
import {AiFillFire,AiFillLike,AiFillDislike,AiFillHeart,AiOutlineComment} from 'react-icons/ai'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-left: 3.5rem;
    margin-top: 3.5rem;
    .image__name {
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    .text{
        height: 10rem;
        width: 15rem;
    }
    .reactions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
    }
    `
export default function HeroSides({text,user}) {
  return (
    <Container>
        <div className='image__name'>
            <img src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='' />
            <h6>{user}</h6>
        </div>
        <div className='text'>
            <p>{text}</p>
        </div>
        <div className='reactions'>
                <AiFillFire /> 1
                <AiFillDislike /> 0
                <AiFillLike /> 100
                <AiFillHeart /> 20
               
                <AiOutlineComment /> 30
        </div>
    </Container>
  )
}
