import { Link } from "react-router-dom";

import imglogo from '../../assets/imagens/imglogo.svg'

const Header = () => {
  return (
    <>
   
        <header className="z-50 bg-[#417571] w-full flex items-center px-6 lg:px-10 h-24">

          <div className="flex justify-between w-full">
            <Link to="/" className="flex items-center lg:text-xl">
              <img src={imglogo} alt="Página inicial do site SaúdeBot" className="w-6 h-6" />
              SaúdeBot
            </Link>

            <nav>
              <ul className="hidden md:flex space-x-8">
                <li className="text-white lg:text-xl"><Link to="/Consultas">Consultas</Link></li>
                <li className="text-white lg:text-xl"><Link to="/Faq">FAQ</Link></li>
                <li className="text-white lg:text-xl"><Link to="/Chat">Chat</Link></li>
                <li className="text-white lg:text-xl"><Link to="/Contato">Contato</Link></li>
              </ul>
            </nav>
          </div>


          {/* <!-- Mobile Menu --> */}
          <div className="md:hidden hidden bg-[#417571] w-full py-3 px-4" id="mobile-menu">
            <div className="flex flex-col space-y-3">
              <ul>
                <li className="text-white lg:text-xl"><Link to="/Consultas">Consultas</Link></li>
                <li className="text-white lg:text-xl"><Link to="/Faq">FAQ</Link></li>
                <li className="text-white lg:text-xl"><Link to="/Chat">Chat</Link></li>
                <li className="text-white lg:text-xl"><Link to="/Contato">Contato</Link></li>
              </ul>
            </div>
          </div>
        </header>

    </>
  );
};
export default Header;
