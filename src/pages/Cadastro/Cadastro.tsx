import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";
import Titulo from "../../components/Titulo/Titulo";

const Cadastro = () => {
    return (
        <>
            <Header />
            <div className="bg-[#d9d9d9] flex flex-col space-y-2 p-8 justify-center">
                <Titulo texto="Cadastro"></Titulo>

                <div className="flex justify-center">
                    <fieldset className="border border-black rounded-lg max-w-72 md:max-w-80 lg:max-w-96 p-6">
                        <p className="text-base text-center pb-4 lg:text-lg">O cadastro é recomendado caso queira receber notificações das suas consultas agendadas. Caso contrário, é possível acessar as perguntas frequentes sem cadastro.</p>
                        <div className="pb-3">
                            <label htmlFor="nome" className="text-base lg:text-lg">Nome completo</label>
                            <input type="text" name="nome" id="nome" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="email" className="text-base lg:text-lg">Email</label>
                            <input type="email" name="email" id="email" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="telefone" className="text-base lg:text-lg">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="endereco" className="text-base lg:text-lg">Endereço</label>
                            <input type="text" name="endereco" id="endereco" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="acessibilidade" className="text-base lg:text-lg">Precisa de acessiblidade?</label>
                            <input type="text" name="acessibilidade" id="acessibilidade" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="senha" className="text-base lg:text-lg">Senha</label>
                            <input type="password" name="senha" id="senha" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>

                        <div className="flex justify-end">
                            <Botao texto="Enviar"></Botao>
                        </div>


                    </fieldset>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Cadastro