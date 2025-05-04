const NavigationBar = () =>{
    return (
        <div className="flex w-full px-4 py-3 justify-between backdrop-blur-sm bg-white/7 shadow-lg bg-background/100 rounded-xl">
            <h1 className="text-white">Portfolio</h1>
            <nav>
                <ul className="flex gap-4 text-white">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default NavigationBar;