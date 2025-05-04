import { useTheme } from "../../Wrappers/ThemeProvider/ThemeProviderWrapper";
import About from "../AboutPage/About";
import Home from "../HomePage/Home";

const MainPage = () => {
    const theme =useTheme();
    return (
        <div className="min-h-screen" style={{ backgroundColor: theme.background.default }}>
            <div className="text-3xl font-bold underline bg-black">

                <h1 className="text-white">Main Page</h1>
            </div>
            <div>
                <Home />
            </div>
            <div>

            <About />
            </div>
        </div>
    );
}
export default MainPage;