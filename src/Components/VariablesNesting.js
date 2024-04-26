import React from 'react'
import styled from 'styled-components'

const VariablesNesting = () => {
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;

        button {
            background-color: red;
            color: #fff;
            padding: 20px;
            cursor: pointer;

                &:hover, &:hover {
                    background-color: blue;
                    color: #000
                }
                .nested-tag {
                    color: green;
                    font-size: 20px
                }

        }

       
`;


  return (
    <Wrapper>
    <Title>
      Hello World!
    </Title>
    <button>Click me <span className='nested-tag'>nested tag</span></button>
  </Wrapper>

  )
}

export default VariablesNesting