import { Link } from "react-router-dom"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";

const Login = () => {
    return (
        <>

            <Header />
            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-3xl mx-auto py-4">Login</h1>


                <div className="flex justify-center">
                    <fieldset className="border border-black rounded-lg p-5 w-72 md:w-80 text-2xl lg:w-96">
                        <p className="text-base justify-items-center w-80 md:text-2xl lg:w-3/5 lg:text-2xl mx-auto text-center pb-4">Faça login para rebecer notificações de suas consultas marcadas e para melhorar suas exeperiência O cadastro também será usado para  personalização do site e melhoria de sua experiência.</p>

                        <div>
                            <label htmlFor="email" className="text-base lg:text-xl">Email</label>
                            <input type="email" name="email" id="email" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>

                        <div>
                            <label htmlFor="senha" className="text-base lg:text-xl">Senha</label>
                            <input type="password" name="senha" id="senha" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>

                        <p className="text-black text-base"><Link to="/Cadastro">Criar conta</Link></p>

                        <Botao texto="Enviar"></Botao>

                    </fieldset>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Login