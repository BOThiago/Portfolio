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
        <div className="">
            <div
                className="box-content flex cursor-pointer flex-col gap-1 lg:hidden"
                onClick={ToggleMode}
            >
                <div
                    className={
                        active
                            ? "w-89 h-1 translate-y-2 rotate-45 rounded bg-black shadow-xl duration-200 ease-in"
                            : "h-1 w-6 rounded bg-black duration-200 ease-in"
                    }
                ></div>
                <div
                    className={
                        active
                            ? "w- invisible h-1 rotate-45 rounded bg-black shadow-xl duration-200 ease-in"
                            : " h-1 w-6 rounded bg-black duration-200 ease-in"
                    }
                ></div>
                <div
                    className={
                        active
                            ? "h-1  w-6 -translate-y-2 -rotate-45 rounded bg-black shadow-xl duration-200 ease-in"
                            : "h-1 w-6 rounded bg-black duration-200 ease-in"
                    }
                ></div>
            </div>

            <div
                className={
                    active
                        ? "absolute flex justify-center rounded-lg border-2 bg-gray-700 p-8 opacity-95 duration-200 ease-linear 3xs:right-4 3xs:mt-10 3xs:w-11/12 2xs:right-5 2xs:mt-10 2xs:w-11/12 xxs:right-8 xxs:mt-10 xxs:w-11/12 sm:right-8 sm:mt-10 sm:w-11/12 sm:ease-in md:right-12 lg:hidden"
                        : "-w-[100%] -h-28 absolute right-10 top-16 block duration-100 ease-in-out lg:hidden"
                }
            >
                <ul className="flex flex-col items-center justify-around gap-4">
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:border-b-purple-800 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#home" onClick={ToggleMode}>
                            Home
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#about" onClick={ToggleMode}>
                            Sobre
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#carreira" onClick={ToggleMode}>
                            Carreira
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#projects" onClick={ToggleMode}>
                            Projetos
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#redesSociais" onClick={ToggleMode}>
                            Redes Sociais
                        </a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#contato" onClick={ToggleMode}>
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
