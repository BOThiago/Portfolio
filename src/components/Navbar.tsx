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
        <div className="bg-zinc-100 shadow-md shadow-gray-300/20 text-zinc-900">
            <div className="flex justify-center py-2">
                <div className="flex items-center gap-16">
                    <a href="">
                        <div className="border-black border-4 rounded-sm">
                            <h2 className="text-xl sm:text-3xl font-bold font-alt">
                                <Typical
                                    steps={["BOThiago =)", 1000, "BOThiago =)"]}
                                    loop={Infinity}
                                    wrapper="span"
                                />
                            </h2>
                        </div>
                    </a>
                    <div className="flex-grow" />

                    <div className="hidden md:flex gap-4">
                        {links.map((link) => (
                            <HoverLine {...link} key={link.href} />
                        ))}
                    </div>

                    <div className="flex-grow" />

                    <DarkModeButton setTheme={setTheme} theme={theme} />
                    <HamburgerMenu />
                </div>
            </div>
        </div>
    );
};

export default Header;
