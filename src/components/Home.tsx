import Gmail from "../assets/img/social/gmail.png";
import Linkedin from "../assets/img/social/linkedin.png";
import Github from "../assets/img/social/placa-do-github.png";
import Me from "../assets/img/me/destaque.png";

const Home = () => {
    return (
        <section
            id="home"
            className="flex flex-col justify-center items-center w-screen h-screen min-h-[700px] gap-4 m-4"
        >
            <img className="rounded-b-full" src={Me} alt="Eu :)" />
            <div className="flex flex-col items-center text-center justify-center mb-4">
                <p className="text-3xl sm:text-4xl md:text-6xl font-semibold ">
                    Olá! Meu nome é
                </p>
                <p className="text-[68px] sm:text-6xl md:text-4xl font-extrabold">
                    Thiago Barreto
                </p>

                <p className="text-center font-normal text-xl">
                    • Tenho 20 anos, atuo na área de análise e desenvolvimento
                    de sistemas.
                </p>
                <p className="text-center font-normal text-xl">
                    • Desenvolvedor FullStack
                </p>
            </div>

            <div className="flex justify-center gap-8">
                <div className="">
                    <a
                        className="flex flex-col items-center "
                        href="https://www.linkedin.com/in/thiago-barreto-de-oliveira/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            className=" h-10 sm:h-16"
                            src={Linkedin}
                            alt="Linkedin"
                        />
                        <p className="font-light hover:font-normal">Linkedin</p>
                    </a>
                </div>
                <div>
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
                        <p className=" font-light hover:font-normal">Github</p>
                    </a>
                </div>
                <div>
                    <a
                        href="mailto:thiago.barreto.oliveira22@gmail.com"
                        className="flex flex-col items-center"
                    >
                        <img className="h-10 sm:h-16" src={Gmail} alt="Gmail" />
                        <p className=" font-light hover:font-normal">E-mail</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
