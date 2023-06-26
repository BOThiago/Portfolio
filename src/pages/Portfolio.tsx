import { useState } from "react";
import Header from "../components/Navbar";
import Home from "../components/Home";
import "../index.css";
import About from "../components/About";

function Portfolio() {
    const [theme, setTheme] = useState(true);

    return (
        <div className="scroll-smooth">
            <div
                className={
                    theme
                        ? "overflow-x-auto bg-zinc-300 text-zinc-800"
                        : "overflow-x-auto bg-zinc-800 text-zinc-100"
                }
            >
                <Header setTheme={setTheme} theme={theme} />
                <Home theme={theme} />
                <About />
                {/* <Home />
                <About />
                <Projects /> */}
            </div>
        </div>
    );
}

export default Portfolio;
