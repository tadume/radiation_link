import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import thema from './theme/theme';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={thema}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
