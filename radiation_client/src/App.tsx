import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import thema from './thema/thema';

function App() {
  return (
    <ChakraProvider theme={thema}>
      <div>hello world</div>
    </ChakraProvider>
  );
}

export default App;
