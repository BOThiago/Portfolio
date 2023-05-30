import DarkModeButton from "./DarkModeButton";
import HoverLine from "./HoverLine";
import Typical from "react-typical";
import HamburgerMenu from "./HamburguerMenu";

interface HeaderProps {
    setTheme: (theme: boolean) => void;
    theme: boolean;
}

const Header = ({ setTheme, theme }: HeaderProps) => {
    const links = [
        { value: "Home", href: "#home" },
        { value: "Sobre", href: "#about" },
        { value: "Carreira", href: "#carreira" },
        { value: "Projetos", href: "#projects" },
        { value: "RedesSociais", href: "#redesSociais" },
        { value: "Contato", href: "#contato" },
    ];

    return (
        <div className="bg-zinc-100 text-zinc-900 shadow-md shadow-gray-300/20">
            <div className="flex justify-center py-2">
                <div className="flex items-center gap-24">
                    <a href="">
                        <div className="">
                            <h2 className="font-alt text-xl font-normal opacity-80 hover:opacity-100 sm:text-3xl">
                                <Typical
                                    steps={["BOThiago =)", 1000, "BOThiago =)"]}
                                    loop={Infinity}
                                    wrapper="span"
                                />
                            </h2>
                        </div>
                    </a>

                    <div className="hidden gap-8 md:flex">
                        {links.map((link) => (
                            <HoverLine {...link} key={link.href} />
                        ))}
                    </div>

                    <DarkModeButton setTheme={setTheme} theme={theme} />

                    <HamburgerMenu />
                </div>
            </div>
        </div>
    );
};

export default Header;
