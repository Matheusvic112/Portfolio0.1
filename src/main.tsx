import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/Global';
import { Home } from '@/pages/home';
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<ChakraProvider>
    <GlobalStyle>
        <NavBar />
        <Home />
        <Footer />
    </GlobalStyle>
</ChakraProvider>
  </React.StrictMode>
)
