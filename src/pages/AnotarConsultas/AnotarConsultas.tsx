import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";

const AnotarConsulta = () => {
    return (
        <>
            <Header />
            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-3xl mx-auto py-4">Anotar Consultas</h1>

                <div className="flex justify-center">
                    <fieldset className="border border-black rounded-lg p-5 w-72 md:w-80 text-2xl lg:w-96">

                        <p className="text-base justify-items-center w-80 md:text-2xl lg:w-3/5 lg:text-2xl mx-auto text-center pb-4">
                            Marque sua consulta no app do HC e anote aqui para ser lembrado.
                        </p>

                        <div>
                            <label htmlFor="data" className="text-base lg:text-xl">Data</label>
                            <input type="date" name="data" id="data" className=" bg-transparent border border-black rounded-sm w-full text-base" />
                        </div>
                        <div>
                            <label htmlFor="horario" className="text-base lg:text-xl">Horário</label>
                            <input type="time" name="horario" id="horario" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="especialidade" className="text-base lg:text-xl">Especialidade</label>
                            <input type="text" name="especialidade" id="especialidade" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="medico"
                                className="text-base lg:text-xl">Médico</label>
                            <input type="text" name="medico" id="medico" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>


                        <Botao texto="Salvar"></Botao>

                    </fieldset>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default AnotarConsulta