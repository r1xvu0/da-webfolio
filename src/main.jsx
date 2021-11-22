import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import IndexPage from './routes/IndexPage'
import ErrorPage from './routes/ErrorPage'
import FantomiesPage from './routes/FantomiesPage'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<IndexPage />} />
          </Route>
            <Route path="/nft-fantoms" element={<FantomiesPage />} />
          <Route
            path="*"
            element={ <ErrorPage /> }
          />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
