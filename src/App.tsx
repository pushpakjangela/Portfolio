import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import LocomotiveWrapper from './Wrappers/Locomotive/LocomotiveWrapper';

const router = createBrowserRouter(routes);

function App() {
  return (
    <LocomotiveWrapper>
      <RouterProvider router={router} />
    </LocomotiveWrapper>
  );
}

export default App;