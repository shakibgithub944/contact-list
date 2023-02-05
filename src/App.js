import { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './components/ContactPage/Contact';
import Main from './components/Main';
import Massege from './components/MassegePage/Massege';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/massege',
        element: <Massege />
      },
    ]
  },


])


function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
