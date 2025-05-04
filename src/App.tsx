import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
// import LocomotiveWrapper from './Wrappers/Locomotive/LocomotiveWrapper';
import { ThemeProviderWrapper } from './Wrappers/ThemeProvider/ThemeProviderWrapper';

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProviderWrapper>
      {/* <LocomotiveWrapper> */}
        <RouterProvider router={router} />
      {/* </LocomotiveWrapper> */}
    </ThemeProviderWrapper>
  );
}

export default App;