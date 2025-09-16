import imglogo from '../../assets/imagens/imglogo.svg'

const Header = () => {
  return (
    <>

      <header className="z-50 bg-[#417571] w-full h-16 flex items-center px-6 lg:px-10 h-24">

        <div className="flex justify-between w-full">
          <div>
            <a href="index.html" className="flex items-center lg:text-xl">
              <img src={imglogo} alt="Página inicial do site SaúdeBot" className="w-6 h-6" />SaúdeBot</a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white lg:text-xl">Home</a>
            <a href="#" className="text-white lg:text-xl">FAQ</a>
            <a href="#" className="text-white lg:text-xl">Chat</a>
            <a href="#" className="text-white lg:text-xl">Contato</a>
          </nav>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          className="md:hidden hidden bg-[#417571] w-full py-3 px-4"
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">FAQ</a>
            <a href="#" className="text-white">Chat</a>
            <a href="#" className="text-white">Contato</a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
