import { useState } from "react";

export const HamburgerMenu = () => {
    const [active, setMode] = useState(false);

    const ToggleMode = () => {
        setMode(!active);
    };

    return (
        <div className="">
            <div
                className="box-content flex cursor-pointer flex-col md:hidden"
                onClick={ToggleMode}
            >
                <div
                    className={
                        active
                            ? "w-89 h-1 translate-y-2 rotate-45 rounded bg-black duration-200 ease-in"
                            : "h-1 w-6 rounded bg-black duration-200 ease-in"
                    }
                ></div>
                <div
                    className={
                        active
                            ? "invisible h-1 w-6 rotate-45 rounded bg-black duration-200 ease-in"
                            : " h-1 w-6 rounded bg-black duration-200 ease-in"
                    }
                ></div>
                <div
                    className={
                        active
                            ? "h-1  w-6 -translate-y-2 -rotate-45 rounded bg-black duration-200 ease-in"
                            : "h-1 w-6 rounded bg-black duration-200 ease-in"
                    }
                ></div>
            </div>

            <div
                className={
                    active
                        ? "h-54 absolute mt-10 block w-[50%] rounded-md bg-zinc-800 p-8 duration-200 ease-in-out sm:w-96 md:hidden"
                        : "-w-[80%] -h-28 absolute right-10 top-16 block duration-100 ease-in-out md:hidden"
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
                        <a href="#home">Home</a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#about">Sobre</a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#carreira">Carreira</a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#projects">Projetos</a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#redesSociais">Redes Sociais</a>
                    </li>
                    <li
                        className={
                            active
                                ? "cursor-pointer text-lg font-medium text-zinc-200 hover:font-semibold"
                                : "hidden"
                        }
                    >
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
