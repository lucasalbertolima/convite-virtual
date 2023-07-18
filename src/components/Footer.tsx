import Link from 'next/link';
import { navigationLinks } from '../../utils/data';

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
        <ul className="flex justify-center md:justify-end space-x-4 py-2">
          <li>
            <Link href="/" className="mr-6">Youtube</Link>
          </li>
          <li>
            <Link target='_blank' href="https://www.instagram.com/convitedigital___/" className="mr-6">Instagram</Link>
          </li>
          <li>
            <Link target='_blank' href="https://api.whatsapp.com/send/?phone=5579988850190&text=Ol%C3%A1%20Sarah,%20vim%20pelo%20site%20quero%20saber%20mais%20sobre%20os%20convites&type=phone_number&app_absent=0" className="mr-6">Whatsapp</Link>
          </li>
        </ul>
      </div>
      <p className="mt-4 text-center">
        © 2023 Convite Virtual By Sarah Jandira. Todos os direitos reservados.
      </p>
    </footer>
  );
};
