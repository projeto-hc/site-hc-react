import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";
import Titulo from "../../components/Titulo/Titulo";


const AnotarConsulta = () => {
    return (
        <>
            <Header />
            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                <Titulo texto="Anotar Consultas"></Titulo>

                <div className="flex justify-center">
                    <fieldset className="border border-black rounded-lg max-w-72 md:max-w-80 lg:max-w-96 p-6">

                        <p className="text-base text-center pb-4 lg:text-lg">Marque sua consulta no app do HC e anote aqui para ser lembrado.</p>

                        <div className="pb-3">
                            <label htmlFor="data" className="text-base lg:text-lg">Data</label>
                            <input type="date" name="data" id="data" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="horario" className="text-base lg:text-lg">Horário</label>
                            <input type="time" name="horario" id="horario" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="especialidade" className="text-base lg:text-lg">Especialidade</label>
                            <input type="text" name="especialidade" id="especialidade" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="medico" className="text-base lg:text-lg">Médico</label>
                            <input type="text" name="medico" id="medico" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>

                        <div className="flex justify-end">
                            <Botao texto="Salvar"></Botao>
                        </div>

                    </fieldset>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default AnotarConsulta