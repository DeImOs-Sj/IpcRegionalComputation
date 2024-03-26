import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { WagmiProvider } from 'wagmi' 
import { config } from './Rainbowkit.jsx' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 


const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <WagmiProvider config={config}> 
            <QueryClientProvider client={queryClient}> 


      <BrowserRouter>

      <App />
        </BrowserRouter>
              </QueryClientProvider> 

          </WagmiProvider> 


  </React.StrictMode>,
)
