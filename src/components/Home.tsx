import Gmail from "../assets/img/social/gmail.png";
import Linkedin from "../assets/img/social/linkedin.png";
import Github from "../assets/img/social/placa-do-github.png";
import Me from "../assets/img/me/destaque.png";

const Home = () => {
    return (
        <section
            id="home"
            className="flex h-screen min-h-[700px] flex-row items-center justify-center p-4"
        >
            <div className="rounded-b-full">
                <img
                    className="cursor-pointer rounded-b-3xl hover:mb-2 hover:mt-1 hover:opacity-90"
                    src={Me}
                    alt="Eu :)"
                />
            </div>
            <div className="mb-4 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-normal sm:text-2xl md:text-4xl ">
                    Olá! Meu nome é
                </p>
                <p className="text-9xl font-extrabold sm:text-4xl md:text-6xl">
                    Thiago Barreto
                </p>

                <p className="mt-4 text-center text-lg font-normal">
                    • Tenho 20 anos, atuo na área de análise e desenvolvimento
                    de sistemas.
                </p>
                <p className="text-center text-lg font-normal">
                    • Desenvolvedor FullStack
                </p>
                <div className="flex flex-row justify-center gap-8 pt-16">
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
                                        className="h-10 rounded-xl bg-zinc-100 hover:p-1 sm:h-16"
                                        src={Github}
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
            </div>
        </section>
    );
};

export default Home;
