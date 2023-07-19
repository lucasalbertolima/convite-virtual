export const Aboutme = () => {
    return (
      <div className="flex flex-col lg:flex-row lg:m-8">
        <div className="w-full lg:w-1/2">
          <div className="p-4 flex items-center">
            <div>
              <h2 className="text-xl font-bold mb-2 text-[#775614]">Sobre mim</h2>
              <p className="mb-2 text-[#775614]">
                Meu nome é Sarah Jandira e sou designer desde 2018. A Convite Virtual nasceu a partir
                da minha experiência em criar diversos convites para minha família, como aniversários
                e casamentos. Percebi o quanto esses convites especiais levaram alegria e encanto aos
                meus entes queridos, o que me inspirou a expandir meu trabalho e realizar o desejo de
                várias pessoas que buscam transmitir um carinho especial através dos convites.
              </p>
              <p className="mb-4 text-[#775614]">
                Desde então, tenho me dedicado a tornar cada convite uma experiência única e
                memorável. Entendo a importância de causar uma boa impressão desde o início, por
                isso crio convites personalizados que vão além de simples informações. Cada convite
                da Convite Virtual reflete a personalidade, estilo e atmosfera específica de cada
                ocasião.
              </p>
            </div>
          </div>
        </div>
        <div className="m-0 w-full lg:w-1/2 flex justify-center">
            <div className="bg-white rounded-full  overflow-hidden">
                <img src="sarahjandira.png" alt="Imagem" className="w-48 lg:w-80 h-auto" />
            </div>
        </div>
      </div>
    );
  };
  