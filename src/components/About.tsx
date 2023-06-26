import Photo from "../assets/img/me/about_image.jpg";

const About = () => {
    return (
        <section
            id="about"
            className="flex h-screen w-screen items-center justify-center 3xs:px-6 3xs:pt-6 2xs:px-6 2xs:pt-8 xxs:px-10 sm:px-3 sm:py-8 sm:pt-8 md:w-full md:p-0 md:px-24 lg:p-8 xl:p-24 xl:px-24 2xl:px-48"
        >
            <div className="flex items-center justify-center max-md:flex-col 3xs:gap-2 3xs:pb-6 2xs:gap-3 2xs:pb-8 xxs:pb-8 sm:flex-col sm:gap-10 md:justify-center lg:flex-row lg:justify-around">
                <div className="flex flex-col items-center max-2xs:hidden 2xs:pb-1 xxs:pb-3 xl:w-4/12 2xl:w-5/12">
                    <img
                        className="mb-16 w-96 rounded-full shadow-lg shadow-stone-950/50 outline outline-2 -outline-offset-1 outline-white 3xs:mb-2 3xs:w-24 2xs:mb-2 2xs:w-36 xxs:mb-4 xxs:w-48 sm:mb-4 sm:w-48 md:mb-8 md:w-48 lg:w-96"
                        src={Photo}
                        alt="Jovem branco, cabelos lisos, olhos castanhos, de camiseta vermelha do seriado flash."
                        height={"100px"}
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-center text-2xl font-medium 3xs:text-2xs 2xs:text-sm xxs:text-base sm:text-base md:text-lg lg:text-xl">
                            Thiago Barreto De Oliveira
                        </p>
                        <p className="text-center text-xl font-light 3xs:text-2xs 3xs:font-normal 2xs:text-xs 2xs:font-normal xxs:text-sm xxs:font-normal sm:text-sm md:text-base lg:text-lg">
                            • São José dos Campos-SP
                        </p>
                    </div>
                </div>
                <div className="items-left flex flex-col justify-center gap-6 3xs:items-center 3xs:gap-0 2xs:items-center 2xs:gap-0 xxs:items-center xxs:gap-3 sm:items-center md:items-center md:p-0 lg:w-7/12 lg:items-start xl:w-9/12 2xl:w-9/12">
                    <h1 className="text-2xl font-bold 3xs:text-xs 2xs:text-base xxs:text-base sm:text-lg md:text-lg lg:text-xl">
                        Sobre Mim
                    </h1>
                    <p className="text-justify text-lg font-normal leading-relaxed 3xs:text-2xs 2xs:text-2xs xxs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg">
                        Olá! Sou Thiago, um jovem apaixonado por tecnologia.
                        Como desenvolvedor Full Stack, tenho experiência em
                        aprimorar produtos digitais, implementar APIs robustas e
                        escaláveis, e aplicar boas práticas de segurança.
                        Trabalho com uma variedade de linguagens, como
                        JavaScript, TypeScript, C#, Java e PHP. Tenho
                        conhecimentos em autenticação segura com JSON Web Tokens
                        (JWT), teste automatizado com Jest, uso eficaz do Docker
                        e domínio de tecnologias frontend como Next.js, Angular
                        e React, e backend com Node.js e frameworks como NestJS.
                        Também tenho experiência no desenvolvimento mobile com
                        Ionic e React Native, publicando projetos nas lojas de
                        aplicativos. Possuo habilidades em ORM's populares, como
                        Prisma, TypeORM e Sequelize, e trabalhei com bancos de
                        dados relacionais e não relacionais, como PostgreSQL,
                        MySQL, SQL Server, MongoDB e DynamoDB. Sou capaz de
                        automatizar deploys, adicionar funcionalidades e
                        solucionar problemas em produtos digitais. Além disso,
                        atuei como analista de sistemas, trabalhando com
                        metodologias ágeis, planejamento de projetos usando
                        Notion e Trello, e sempre busco atualizar-me com as
                        últimas tendências e tecnologias. Como desenvolvedor
                        Full Stack, estou preparado para enfrentar desafios e
                        entregar soluções de qualidade e escaláveis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
