import { useState } from "react";
import Header from "../components/Navbar";
import Home from "../components/Home";
import "../index.css";

function Portfolio() {
    const [theme, setTheme] = useState(false);

    return (
        <div className="scroll-smooth">
            <div
                className={
                    theme
                        ? "overflow-x-auto bg-zinc-200 text-zinc-900"
                        : "overflow-x-auto bg-zinc-900 text-zinc-100"
                }
            >
                <Header setTheme={setTheme} theme={theme} />
                <Home />
                {/* <About />
                <Projects /> */}
            </div>
        </div>
    );
}

export default Portfolio;
