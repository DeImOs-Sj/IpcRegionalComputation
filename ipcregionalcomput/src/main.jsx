import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme, lightTheme, getDefaultConfig } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { filecoinCalibration } from 'wagmi/chains';


const config = getDefaultConfig({
  appName: 'ipcregionalcomput',
  projectId: 'ec0f12a1ee7ac19908cb299e09cac93b',
  chains: [filecoinCalibration],
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render( // Remove the trailing comma here
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RainbowKitProvider
            coolMode
            modalSize="compact"
            theme={darkTheme({
              accentColor: "#1E88E5",
              borderRadius: "large",
              overlayBlur: "small",
            })}
          >
            <App />
          </RainbowKitProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
