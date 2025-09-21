import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Cadastro = () => {
    return (
        <>
            <Header />
            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-3xl mx-auto py-4">Cadastro</h1>


                <div className="flex justify-center">
                    <fieldset className="border border-black rounded-lg p-5 w-72 md:w-80 text-2xl lg:w-96">

                        <div>
                            <label htmlFor="nome" className="text-base lg:text-xl">Nome completo</label>
                            <input type="text" name="nome" id="nome" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-base lg:text-xl">Email</label>
                            <input type="email" name="email" id="email" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="telefone"
                                className="text-base lg:text-xl">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="senha" className="text-base lg:text-xl">Senha</label>
                            <input type="password" name="senha" id="senha" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>

                        <button className="bg-[#417571] p-2 border border-black rounded-sm text-base text-white lg:text-2xl">Enviar</button>

                    </fieldset>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Cadastro