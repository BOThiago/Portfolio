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
        <div
            className={
                theme
                    ? "flex justify-around bg-zinc-100 text-zinc-900 shadow-md shadow-gray-300/20 md:justify-around"
                    : "flex justify-around bg-gray-300 text-zinc-900 shadow-md shadow-gray-300/20 md:justify-around"
            }
        >
            <div className="py-2 3xs:py-5 2xs:py-5 xxs:py-5 sm:py-4 lg:py-4 2xl:py-6">
                <div className="flex items-center gap-24 3xs:gap-16 sm:gap-60 md:justify-between md:gap-96 lg:gap-8 xl:justify-around xl:gap-16 2xl:gap-24">
                    <div>
                        <a href="">
                            <div className="">
                                <h2 className="font-alt text-xl font-semibold opacity-80 hover:opacity-100 sm:text-3xl lg:text-2xl xl:text-2xl">
                                    <Typical
                                        steps={[
                                            "BOThiago =)",
                                            1000,
                                            "BOThiago =)",
                                        ]}
                                        loop={Infinity}
                                        wrapper="span"
                                    />
                                </h2>
                            </div>
                        </a>
                    </div>

                    <div className="lg:text-normal hidden gap-8 lg:flex">
                        {links.map((link) => (
                            <HoverLine {...link} key={link.href} />
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-8 align-middle">
                        <div>
                            <DarkModeButton setTheme={setTheme} theme={theme} />
                        </div>

                        <div>
                            <HamburgerMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
