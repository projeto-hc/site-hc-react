import { Link } from "react-router-dom"


import imglogo from '../../assets/imagens/imglogo.svg'
import maps from '../../assets/imagens/maps.png'
import tel from '../../assets/imagens/tel.png'
import hospital from '../../assets/imagens/hospital.png'
import playstore from '../../assets/imagens/playstore.png'
// sendo feito no mobile (375 por 667)

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-[#417571] w-full h-auto py-7 md:flex flex-row justify-between">

                    <Link to="/" className="flex items-center justify-center p-6 lg:text-xl">
                        <img src={imglogo} alt="Página inicial do site SaúdeBot" className="w-6 h-6" />
                        SaúdeBot
                    </Link>

                    <div className="flex flex-col text-center p-3 md:text-left">
                        <p className="text-2xl font-inter text-white">Projeto</p>
                        <ul>
                            <li className="text-white text-base font-inter">
                                <Link to="/Consultas">Consultas</Link>
                            </li>
                            <li className="text-white text-base font-inter">
                                <Link to="/Cadastro">Cadastro</Link>
                            </li>
                            <li className="text-white text-base font-inter">
                                <Link to="/Login">Login</Link>
                            </li>
                            <li className="text-white text-base font-inter">
                                <Link to="/Integrantes">Integrantes</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col text-center p-3 md:text-left px-6">
                        <p className="text-2xl font-inter text-white">Suporte</p>
                        <ul>
                            <li className="text-white text-base font-inter">
                                <Link to="/FAQ">FAQ</Link>
                            </li>
                            <li className="text-white text-base font-inter">
                                <Link to="/Chat">Chat</Link>
                            </li>
                            <li className="text-white text-base font-inter">
                                <Link to="/Contato">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col text-center space-y-2 p-3 md:text-left">
                        <p className="text-2xl font-inter text-white">Informações</p>
                        <div className="w-full flex items-center justify-center md:justify-start">
                            <img src={maps} alt="Endereço do Hospital das Clínicas" className="w-6 h-6" />
                            <p className="text-white text-base font-inter">Complexo do HC – Eixo Rosa (Portão 3, Inrad), São Paulo – SP</p>
                        </div>
                        <div className="w-full flex items-center justify-center md:justify-start">
                            <img src={tel} alt="Telefone para contato com Hospital das Clínicas" className="w-6 h-6" />
                            <p className="text-white text-base font-inter">(11) 2661-7557 / 2661-7821</p>
                        </div>
                        <div className="w-full flex items-center justify-center md:justify-start">
                            <img src={hospital} alt="Site oficial do Hospital das Clínicas" className="w-6 h-6" />
                            <p className="text-white text-base font-inter">
                                Site oficial do <a href="https://redelucymontoro.org.br/site/area-do-paciente/teleatendimento/" className="text-[#1D72B8]">HC ImREA</a>
                            </p>
                        </div>
                        <div className="w-full flex items-center justify-center md:justify-start">
                            <img src={playstore} alt="Link da PlayStore para baixar o app Portal do Paciente - HC" className="w-6 h-6" />
                            <p className="text-white text-base font-inter">
                                Clique <a href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente" className="text-[#1D72B8]">aqui</a> para baixar na PlayStore
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
