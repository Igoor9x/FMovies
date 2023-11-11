import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import InfoMovie from './Pages/InfoMovie.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import SearchMovie from './Pages/SearchMovie.jsx'
import SearchTV from './Pages/SearchTV.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'watchInfo/:mediaType/:id',
        element: <InfoMovie />
      },
      {
        path: 'searchMovie',
        element: <SearchMovie />
      },
      {
        path: 'searchTV',
        element: <SearchTV />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
