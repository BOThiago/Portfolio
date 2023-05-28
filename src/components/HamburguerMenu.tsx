import { useState } from "react";

export const HamburgerMenu = () => {
    const [active, setMode] = useState(false);

    const ToggleMode = () => {
        setMode(!active);
    };

    const handleLinkClick = () => {
        setMode(false);
    };

    return (
        <div className="hamburguer">
            <div
                className="flex flex-col gap-1 cursor-pointer"
                onClick={ToggleMode}
            >
                <div
                    className={
                        active
                            ? "rounded duration-100 ease-in w-6 h-1 bg-black rotate-45 translate-y-2"
                            : "rounded w-6 h-1 bg-black ease-in duration-100"
                    }
                ></div>
                <div
                    className={
                        active
                            ? "rounded ease-in w-6 h-1 bg-black rotate-45 duration-100 invisible"
                            : "rounded w-6 h-1 bg-black ease-in duration-100"
                    }
                ></div>
                <div
                    className={
                        active
                            ? "rounded  duration-100 ease-in w-6 h-1 bg-black -rotate-45 -translate-y-2"
                            : "rounded w-6 h-1 bg-black ease-in duration-100"
                    }
                ></div>
            </div>

            <div
                className={
                    active
                        ? "block absolute right-10 bg-purple-900 w-[100%] md:w-96 h-64 p-16 ease-in-out duration-200 rounded-bl rounded-br mt-6"
                        : "block absolute right-10 duration-100 ease-in-out -w-[80%] -h-28"
                }
            >
                <ul className="flex justify-around flex-col items-center gap-8">
                    <li
                        className={
                            active
                                ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-xl"
                                : "hidden"
                        }
                    >
                        <a href="#home" onClick={handleLinkClick}>
                            Home
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-xl"
                                : "hidden"
                        }
                    >
                        <a href="#about" onClick={handleLinkClick}>
                            Sobre
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-xl"
                                : "hidden"
                        }
                    >
                        <a href="#carreira" onClick={handleLinkClick}>
                            Carreira
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-xl"
                                : "hidden"
                        }
                    >
                        <a href="#projects" onClick={handleLinkClick}>
                            Projetos
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-xl"
                                : "hidden"
                        }
                    >
                        <a href="#redesSociais" onClick={handleLinkClick}>
                            Redes Sociais
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-zinc-200 font-medium hover:font-semibold text-xl"
                                : "hidden"
                        }
                    >
                        <a href="#contato" onClick={handleLinkClick}>
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
