import Gmail from "../assets/img/social/gmail.png";
import Linkedin from "../assets/img/social/linkedin.png";
import Github from "../assets/img/social/placa-do-github.png";
import Me from "../assets/img/me/destaque.png";

const Home = () => {
    return (
        <>
            <section
                id="home"
                className="flex w-screen xl:h-screen flex-col justify-center gap-16 p-8"
            >
                <div className="flex justify-center items-center flex-row-reverse gap-16 p-4 lg:flex-col sm:mt-16">
                    <div id="photo-me" className="flex justify-center">
                        <img
                            className="rounded-b-md"
                            src={Me}
                            alt="Eu :)"
                            width={"500px"}
                        />
                    </div>
                    <div
                        id="introduction"
                        className="flex flex-col text-start justify-start items-start"
                    >
                        <div className="flex items-center flex-col text-justify">
                            <p className="text-3xl sm:text-4xl md:text-3xl font-normal">
                                Olá! Meu nome é
                            </p>
                            <p className="text-[68px] sm:text-6xl md:text-6xl font-extrabold">
                                Thiago Barreto
                            </p>
                            <p className="text-start md:text-center font-normal md:text-xl">
                                • Atuo na área de análise e desenvolvimento de
                                sistemas.
                            </p>
                            <p className="text-start font-normal md:text-xl">
                                • Desenvolvedor FullStack
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    id="social-media"
                    className="flex flex-row gap-16 justify-center"
                >
                    <div id="linkedin">
                        <a
                            className="flex flex-col items-center"
                            href="https://www.linkedin.com/in/thiago-barreto-de-oliveira/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                className="h-10 sm:h-16"
                                src={Linkedin}
                                alt="Linkedin"
                            />
                            <p className="font-light hover:font-normal">
                                Linkedin
                            </p>
                        </a>
                    </div>
                    <div id="github">
                        <a
                            className="flex flex-col items-center"
                            href="https://github.com/BOThiago"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <div className="bg-zinc-100 rounded-2xl">
                                <img
                                    className="h-10 sm:h-16"
                                    src={Github}
                                    alt="Github"
                                />
                            </div>
                            <p className="font-light hover:font-normal">
                                Github
                            </p>
                        </a>
                    </div>
                    <div id="gmail">
                        <a
                            href="mailto:thiago.barreto.oliveira22@gmail.com"
                            className="flex flex-col items-center"
                        >
                            <img
                                className="h-10 sm:h-16"
                                src={Gmail}
                                alt="Gmail"
                            />
                            <p className="font-light hover:font-normal">
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
