import React from 'react'
import ReactDOM from 'react-dom/client'

import Inicio from './pages/Inicio.jsx'

import Calendario from './pages/Calendario.jsx'
import Resultados from './pages/Resultados.jsx'
import Clasificacion from './pages/Clasificacion.jsx'

import FichaPartido from './pages/FichaPartido.jsx'

import Draft from './pages/Draft.jsx'

import Contacto from './pages/Contacto.jsx'

import NotFound from './pages/NotFound.jsx'

import './styles/Index.css'
import './styles/Partido.css'
import './styles/Draft.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/calendario",
    element: <Calendario />,
  },
  {
    path: "/resultados",
    element: <Resultados />,
  },
  {
    path: "/clasificacion",
    element: <Clasificacion />,
  },
  {
    path: "/draft",
    element: <Draft />,
  },
  {
    path: "/partido",
    element: <FichaPartido />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)