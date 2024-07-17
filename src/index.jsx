import { createRoot } from 'react-dom/client';
import './global.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Events } from './pages/Events';
import { Find_doula } from './pages/Find_doula';
import { Association } from './pages/components/Association';
import { Contacts } from './pages/Contacts';
import { App } from './pages/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: '/about/association',
            element: <Association />,
          },
        ],
      },
      {
        path: '/education',
        element: <Education />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/find_doula',
        element: <Find_doula />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
