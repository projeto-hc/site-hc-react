import { Link } from "react-router-dom"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";
import Titulo from "../../components/Titulo/Titulo";


const Login = () => {
    return (
        <>

            <Header />
            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                <Titulo texto="Login"></Titulo>

                <div className="flex justify-center">
                    <fieldset className="border border-black rounded-lg max-w-72 md:max-w-80 lg:max-w-96 p-6">

                        <p className="text-base text-center pb-4 lg:text-lg">Faça login para rebecer notificações de suas consultas marcadas e para melhorar suas exeperiência O cadastro também será usado para  personalização do site e melhoria de sua experiência.</p>

                        <div className="pb-3">
                            <label htmlFor="email" className="text-base lg:text-lg">Email</label>
                            <input type="email" name="email" id="email" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>

                        <div className="pb-3">
                            <label htmlFor="senha" className="text-base lg:text-lg">Senha</label>
                            <input type="password" name="senha" id="senha" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>


                        <div className="flex justify-between items-center">
                            <p className="text-black text-base"><Link to="/Cadastro">Criar conta</Link></p>
                            <Botao texto="Enviar"></Botao>
                        </div>

                    </fieldset>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Login