import maps from '../../assets/imagens/maps.png'
import tel from '../../assets/imagens/tel.png'
import hospital from '../../assets/imagens/hospital.png'
import playstore from '../../assets/imagens/playstore.png'
// sendo feito no mobile (375 por 667)

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-[#417571] w-full h-128 p-5 space-y-2">

                    <div className="w-full flex flex-col text-center">
                        <p className="text-2xl">Projeto</p>
                        <a href="#" className="text-black text-base">Cadastro</a>
                        <a href="#" className="text-black text-base">Login</a>
                        <a href="#" className="text-black text-base">Integrantes</a>
                    </div>
                
                    <div className="w-full flex flex-col text-center">
                        <p className="text-2xl">Suporte</p>
                        <a href="#" className="text-black text-base">FAQ</a>
                        <a href="#" className="text-black text-base">Chat</a>
                        <a href="#" className="text-black text-base">Contato</a>
                    </div>
                
                    <div className="w-full flex flex-col text-center space-y-2">
                        <p className="text-2xl">Informações</p>
                        <div className="w-full flex items-center justify-center">
                            <img src={maps} alt="Endereço do Hospital das Clínicas" className="w-6 h-6" />
                            <p className="text-black text-base">Eixo Rosa, Complexo do HC, Portão 3 – Inrad, São Paulo, SP – CEP 05403-000</p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <img src={tel} alt="Telefone para contato com Hospital das Clínicas" className="w-6 h-6" />
                            <p className="text-black text-base">(11) 2661-7557 / 2661-7821</p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <img src={hospital} alt="Site oficial do Hospital das Clínicas" className="w-6 h-6" />
                            <p className="text-black text-base">Site oficial do <a
                                href="https://redelucymontoro.org.br/site/area-do-paciente/teleatendimento/">HC
                                ImREA</a></p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <img src={playstore} alt="Link da PlayStore para baixar o app Portal do Paciente - HC" className="w-6 h-6" />
                            <p className="text-black text-base">Clique <a
                                href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente">aqui</a>
                            para baixar na PlayStore</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;