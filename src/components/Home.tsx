import { FC } from "react";
import Gmail from "../assets/img/social/gmail.png";
import Linkedin from "../assets/img/social/linkedin.png";
import Github from "../assets/img/social/placa-do-github.png";
import GithubDark from "../assets/img/social/Github-Dark.svg";
import Me from "../assets/img/me/destaque.png";

interface HomeProps {
    theme: boolean;
}

const Home: FC<HomeProps> = ({ theme }) => {
    return (
        <section
            id="home"
            className="flex h-screen min-h-[700px] flex-row items-center justify-center p-4 3xs:flex-col 2xs:flex-col xxs:flex-col sm:h-screen sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:gap-32"
        >
            <div className="rounded-b-full">
                <img
                    className="cursor-pointer rounded-b-3xl hover:mb-2 hover:mt-1 hover:opacity-90 3xs:w-80 2xs:w-96 xxs:w-96 sm:w-96 lg:w-auto"
                    src={Me}
                    alt="Eu :)"
                />
            </div>
            <div className="mb-4 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-normal 3xs:text-base 2xs:text-base xxs:text-base sm:text-xl md:text-2xl 2xl:text-4xl">
                    Olá! Meu nome é
                </p>
                <p className="text-9xl font-extrabold 3xs:text-2xl 2xs:text-3xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-6xl">
                    Thiago Barreto
                </p>
                <div className="flex flex-col gap-2">
                    <p className="mt-4 text-center text-lg font-normal 3xs:text-sm 2xs:text-sm xxs:text-sm sm:text-sm md:text-base 2xl:text-xl">
                        • Analista e desenvolvedor de sistemas.
                    </p>
                    <p className="text-center text-lg font-normal 3xs:text-sm 2xs:text-sm xxs:text-sm sm:text-sm 2xl:text-xl">
                        • Desenvolvedor FullStack
                    </p>
                </div>
                <div className="flex flex-row justify-center gap-8 pt-16 sm:text-sm md:text-base 2xl:gap-14 2xl:text-xl">
                    <div className="">
                        <a
                            className="flex flex-col items-center"
                            href="https://www.linkedin.com/in/thiago-barreto-de-oliveira/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                className=" h-10 hover:p-1 sm:h-16"
                                src={Linkedin}
                                alt="Linkedin"
                            />
                            <p className="font-light hover:font-normal">
                                Linkedin
                            </p>
                        </a>
                    </div>
                    <div>
                        <a
                            className="flex flex-col items-center"
                            href="https://github.com/BOThiago"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <div className="">
                                <div className="rounded-full">
                                    <img
                                        className={
                                            theme
                                                ? "h-10 rounded-xl hover:p-1 sm:h-16"
                                                : "h-10 rounded-xl border-2 hover:border-0 hover:p-2 sm:h-16"
                                        }
                                        src={theme ? Github : GithubDark}
                                        alt="Github"
                                    />
                                </div>
                            </div>
                            <p className="font-light hover:font-normal">
                                Github
                            </p>
                        </a>
                    </div>
                    <div>
                        <a
                            href="mailto:thiago.barreto.oliveira22@gmail.com"
                            className="flex flex-col items-center"
                        >
                            <img
                                className="h-10 hover:p-1 sm:h-16"
                                src={Gmail}
                                alt="Gmail"
                            />
                            <p className=" font-light hover:font-normal">
                                E-mail
                            </p>
                        </a>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="flex h-screen w-screen items-center justify-around flex-row-reverse"></div>
            </section>
        </>
    );
};

export default Home;
