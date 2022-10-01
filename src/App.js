import React, { useState } from "react";
import styled from "@emotion/styled";
import Phrase from "./components/Phrase";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 0%, #0f574e 100% );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const [phrase, savePhrase] = useState({});

  const consultAPI = async () => {
    const api = await fetch('https://breakingbadapi.com/api/quote/random');
    const phrase = await api.json();
    // console.log(phrase[0]);
    savePhrase(phrase[0]);
  }
  

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />
      <Button
        onClick={consultAPI}
      >
        Get Phrase
      </Button>
    </Container>
  );
}

export default App;
