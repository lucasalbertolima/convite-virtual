import Sliders from "@/components/Sliders"
import ModelsConvite from "@/components/ModelsConvite"
import Depositons from "@/components/Depositions"
import { Aboutme } from "@/components/Aboutme"
import { FaCheck, FaWhatsapp } from "react-icons/fa6"
import Link from 'next/link'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"


export default function Home() {

  

  return (
    <main>
      <Header />
      <Sliders />
      <section id="modelos" className="m-4">
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
              <Link target='_blank' href="https://api.whatsapp.com/send/?phone=5579988850190&text=Oi%20Sarah,%20quero%20fazer%20o%20meu%20convite%20virtual&type=phone_number&app_absent=0">
                <div className="flex flex-row items-center space-x-1">
                  <div className="walking-text flex flex-row items-center space-x-1 bg-green-100 text-xs px-3 py-2 lg:text-base lg:px-5 lg:py-2 rounded-md ">
                    <img className="rounded-full " width={30} src="sarahperfilwhats.png" alt="" />
                    <p className="font-bold text-gray-500">Fale Comigo agora mesmo!</p>
                    <FaCheck size={12} className="text-gray-500" />
                  </div>
                  <div
                    className="bg-[#00a884] z-10 text-white rounded-full p-2 shadow-md cursor-pointer"
                  >
                    <p><FaWhatsapp size={36} /></p>
                  </div>
                </div>
              </Link>
          </div>
      </section>

      <hr className="border-t border-[#775614] m-8" />

      <section id="sobre" className="m-0 sm:mb-8 md:mb-8 lg:m-8 flex justify-center">
        <Aboutme />
      </section>

      <hr className="border-t border-[#775614] m-8" />

      <section  id="depoimentos" className="m-4">
        <h1 className="text-2xl text-[#775614] font-bold text-center mb-4">
          Depoimento de Clientes
        </h1>
        <div className="flex flex-wrap justify-center">
          <Depositons
            image="depoimento1.jpg"
            estilo="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4"
          />
          <Depositons
            image="depoimento2.jpg"
            estilo="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          />
          <Depositons
            image="depoimento3.jpg"
            estilo="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          />
        </div>
        </section>

        <Footer />
      </main>
  )
}
