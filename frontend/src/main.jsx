import { StrictMode } from 'react'

import App from './App.jsx'
import './index.css';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store  from './redux/store.js';
import { createRoot } from 'react-dom/client'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} />
  )
)

// ReactDOM.createRoot(document.getElementById('root')) is no longer valid in react 18+
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} /> 
  </Provider>

)
