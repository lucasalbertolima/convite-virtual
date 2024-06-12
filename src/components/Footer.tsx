import Link from 'next/link';
import { navigationLinks } from '../../utils/data';

import { FaWhatsapp } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"

export const Footer = () => {
  return (
    <footer className="bg-[#775614] text-white py-4 px-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <nav className="w-full md:w-auto mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 py-2">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link className="mr-6" href={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full md:w-auto md:mb-0 flex justify-center md:justify-end">
          <ul className="flex space-x-4 py-2">
            <li>
              <Link target='_blank' href="https://www.facebook.com/profile.php?id=100091507115114" className="mr-6"><span><FaFacebook size={30} /></span></Link>
            </li>
            <li>
              <Link target='_blank' href="https://www.instagram.com/convitevirtual_interativo_/" className="mr-6"><span><FaInstagram size={30} /></span></Link>
            </li>
            <li>
              <Link target='_blank' href="https://api.whatsapp.com/send/?phone=5579988850190&text=Ol%C3%A1%20Sarah,%20vim%20pelo%20site%20quero%20saber%20mais%20sobre%20os%20convites&type=phone_number&app_absent=0" className="mr-6"><span><FaWhatsapp size={30} /></span></Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center">
        © 2024 Convite Virtual By Sarah Jandira. Todos os direitos reservados.
      </p>
    </footer>
  );
};
