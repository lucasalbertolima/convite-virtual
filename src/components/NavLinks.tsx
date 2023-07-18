import Link from 'next/link';
import { navigationLinks } from '../../utils/data';

export const NavLinkPc = () => {
    return (
      <ul className="flex space-x-4 py-2">
        {navigationLinks.map((link, index) => (
            <li key={index} >
                <Link className="mr-6" href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    );
  };
  

export const NavLinkMobile = () => {
    return (
      <ul className="py-4">
        {navigationLinks.map((link, index) => (
            <li key={index} className="my-4" >
                 <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    );
  };
  