import './App.css';
import { Outlet, RouterProvider } from 'react-router-dom';
import router from './routes/router.js';
import GlobalStyle from './global/global.js';

import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
