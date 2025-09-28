// sendo feito no mobile (375 por 667) IPHONE SE

// tablet Asus Zenbook 853 por 1280
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";
import Titulo from "../../components/Titulo/Titulo";


const Contato = () => {
    return (
        <>
            <Header />

            <div className="bg-[#d9d9d9] flex flex-col items-center p- space-y-2 p-8">
                <Titulo texto="Contato"></Titulo>
                <fieldset className="border border-black rounded-lg max-w-72 md:max-w-80 lg:max-w-96 p-6">
                    <p className="text-base text-center pb-4 lg:text-lg">Envie sua dúvida e entraremos em contato</p>
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
                    <div>
                        <label htmlFor="mensagem" className="text-base lg:text-lg">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows={5} className="bg-transparent border border-black rounded-sm w-full" ></textarea>
                    </div>

                    <Botao texto="Enviar"></Botao>

                </fieldset>

            </div>

            <Footer />
        </>
    );
};
export default Contato;