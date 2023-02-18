import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
