import React from 'react';
import './App.css';
import styled from 'styled-components'
import VariablesNesting from './Components/VariablesNesting';

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
   {/* <Wrapper>
    <button>app</button>
    <p>shamsher kc</p>
   </Wrapper> */}
   <VariablesNesting />
   </>
  );
}

export default App;
