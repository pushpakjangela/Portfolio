import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useTheme } from '../ThemeProvider/ThemeProviderWrapper';

const LayoutWrapper = () => {
    const theme = useTheme();
  return (
    <div className="relative bg-transparent min-h-screen " style={{backgroundColor: theme.background.default}}>
      <div className="sticky top-0 z-50 py-4 px-2" style={{backgroundColor: theme.background.default}}>
        <NavigationBar />
      </div>
      <div className="pt-16" style={{background: theme.background.default}}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWrapper;
