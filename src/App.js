import React from 'react';
import './App.css';
import styled from 'styled-components'

const App = () =>{

  const Wrapper = styled.section`

    button {
      padding: 20px;
      background-color: red;
      color: #fff;
    }
    p{
      color: blue;

    }
  `;
  return (
   <>
   <Wrapper>
    <button>app</button>
    <p>shamsher kc</p>
   </Wrapper>
   </>
  );
}

export default App;
