import { createRoot } from 'react-dom/client';
import './global.css';
import { HomePage } from './pages/HomePage';
import { Doula } from './pages/Doula';
import { Education } from './pages/Education';
import { Events } from './pages/Events';
import { Find_doula } from './pages/Find_doula';
import { About } from './pages/components/About';
import { Contacts } from './pages/Contacts';
import { App } from './pages/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/doula',
          element: <Doula />,
        },
        {
          path: '/about',
          element: <About />,
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
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  },
);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
