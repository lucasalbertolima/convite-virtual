import Sliders from "@/components/Sliders"
import ModelsConvite from "@/components/ModelsConvite"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Aboutme } from "@/components/Aboutme"

export default function Home() {
  return (
    <main>
      <Sliders />
      <section className="m-4">
        <h1 className="text-2xl text-[#775614] font-bold text-center mb-4">Modelos</h1>
        <div className="flex flex-wrap justify-center">
          <ModelsConvite
            image="estatico.jpg"
            title="Convite Estático"
            description="ENVIO ILIMIDATO <br/> ENVIO EM FORMATO DE IMAGEM"
            estilo="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4"
          />
          <ModelsConvite
            image="interativo.jpg"
            title="Convite Interativo"
            description="- ENVIO ILIMIDATO <br/> - BOTÕES CLICÁVEIS: <br/> - LOCAL; <br/> - LISTA DE PRESENTES; <br/>
            - CONFIRMAÇÃO DE PRESENÇA; <br/>
            - E OUTROS LINKS... <br/>
            - ENVIO EM FORMATO PDF"
            estilo="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          />
          <ModelsConvite
            image="interativo_plus.jpg"
            title="Convite Interativo Plus"
            description="- ENVIO ILIMIDATO <br/> - BOTÕES CLICÁVEIS: <br/> - LOCAL; <br/> - LISTA DE PRESENTES; <br/>
            - CONFIRMAÇÃO DE PRESENÇA; <br/>
            - E OUTROS LINKS... <br/>
            - VIDEO INTERATIVO <br/>
            - ENVIO EM FORMATO PDF"
            estilo="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          />
        </div>
          <div className="fixed bottom-4 right-4 z-10">
                  <div
                    className="bg-green-500 text-white rounded-full p-6 shadow-md cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  </div>
          </div>
      </section>
      <section className="m-0 flex justify-center lg:m-8">
        <Aboutme />
      </section>
      </main>
  )
}
