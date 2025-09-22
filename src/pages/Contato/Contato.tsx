// sendo feito no mobile (375 por 667) IPHONE SE

// tablet Asus Zenbook 853 por 1280
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";

const Contato = () => {
    return (
        <>
          <Header/>

                <div className="bg-[#d9d9d9] flex flex-col items-center p- space-y-2 p-8">
                    <h1 className="font-bold text-xl text-center md:text-2xl lg:text-3xl">Contato</h1>

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
                            <label htmlFor="mensagem" className="text-base lg:text-xl">Telefone</label>
                            <textarea id="mensagem" name="mensagem" rows={5} className="bg-transparent border border-black rounded-sm w-full" ></textarea>
                        </div>

                        <Botao texto="Enviar"></Botao>

                    </fieldset>

                </div>
                
        <Footer/>
        </>
    );
};
export default Contato;