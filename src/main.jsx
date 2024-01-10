import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import { Box } from '@mui/material';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Box sx={{
      maxWidth: '1200px' ,
      margin: '0 auto',
    }}>

     <RouterProvider router={router} />
    </Box>
  </React.StrictMode>,
)
