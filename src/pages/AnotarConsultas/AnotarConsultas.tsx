// import Botao from "../../components/Botao/Botao";
// import Titulo from "../../components/Titulo/Titulo";

// _____API____

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Consulta = {
    id?: number;
    data: string;
    horario: string;
    especialidade: string;
    profissional: string;
};
const AnotarConsulta = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const consultaEdicao = location.state as Consulta | null; // edita consulta, se houver

    const [consulta, setConsulta] = useState<Consulta>({
        id: consultaEdicao?.id ?? undefined,
        data: consultaEdicao?.data ?? "",
        horario: consultaEdicao?.horario ?? "",
        especialidade: consultaEdicao?.especialidade ?? "",
        profissional: consultaEdicao?.profissional ?? "",
    });

    // se houver edição, preenche os dados
    useEffect(() => {
        if (consultaEdicao) {
            setConsulta(consultaEdicao);
        }
    }, [consultaEdicao]);

    const API_URL = "http://localhost:8080/aluno";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setConsulta({
            ...consulta,
            [id]: value,
            // ouuuuuu       [id]: id === "id" ? Number(value) : value
        });
    };


    // Unifica cadastro e atualização
    const handleSubmit = async () => {
        const method = consulta.id ? "PUT" : "POST";
        const url = consulta.id ? `${API_URL}/${consulta.id}` : API_URL;

        try {
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(consulta),
            });

            if (response.ok) {
                alert(
                    consulta.id
                        ? `Consulta "${consulta.id}" atualizada com sucesso!`
                        : `Consulta "${consulta.id}" cadastrada com sucesso!`
                );
                navigate("/listar");
            } else {
                const erro = await response.text();
                alert("Erro ao salvar consulta: " + erro);
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão com o servidor.");
        }
    };

    const handleReset = () => {
        setConsulta({ id: 0, data: "", horario: "", especialidade: "", profissional: "" });
    };


    // -------- fim  API  ------------
    return (
        <>
            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                {/* <Titulo texto="Anotar Consultas"></Titulo> */}
                <h1 className="text-2xl font-semibold text-center mb-6">
                    {consulta.id ? "Atualizar Consulta" : "Anotar Consulta"}
                </h1>

                <form
                    id="formConsulta"
                    onReset={handleReset}
                    className="space-y-4">


                    <div className="flex justify-center">

                        <fieldset className="border border-black rounded-lg max-w-72 md:max-w-80 lg:max-w-96 p-6">

                            <p className="text-base text-center pb-4 lg:text-lg">Marque sua consulta no app do HC e anote aqui para ser lembrado.</p>

                            <div className="pb-3">
                                <label htmlFor="data" className="text-base lg:text-lg">Data</label>
                                <input type="date" name="data" id="data" value={consulta.data} onChange={handleChange} className="bg-transparent border border-black rounded-sm w-full" />
                            </div>
                            <div className="pb-3">
                                <label htmlFor="horario" className="text-base lg:text-lg">Horário</label>
                                <input type="time" name="horario" id="horario" value={consulta.horario} onChange={handleChange} className="bg-transparent border border-black rounded-sm w-full" />
                            </div>
                            <div className="pb-3">
                                <label htmlFor="especialidade" className="text-base lg:text-lg">Especialidade</label>
                                <input type="text" name="especialidade" id="especialidade" value={consulta.especialidade} onChange={handleChange} className="bg-transparent border border-black rounded-sm w-full" />
                            </div>
                            <div className="pb-3">
                                <label htmlFor="profissional" className="text-base lg:text-lg">Médico (Profissional)</label>
                                <input type="text" name="profissional" id="profissional" value={consulta.profissional} onChange={handleChange} className="bg-transparent border border-black rounded-sm w-full" />
                            </div>

                             {/* <div className="flex justify-end">
                                <Botao texto="Salvar"></Botao>
                            </div>  */}

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className={`${consulta.id
                                        ? "bg-amber-500 hover:bg-amber-600"
                                        : "bg-[#417571] border border-black hover:text-black"
                                        } text-white px-5 py-2 rounded-md text-base transition duration-300`}
                                >
                                    {consulta.id ? "Atualizar" : "Salvar"}
                                </button>

                                <button
                                    type="reset"
                                    className="bg-gray-300 border border-black  hover:bg-gray-400 px-5 py-2 rounded-md text-base transition duration-300"
                                >
                                    Limpar
                                </button>
                            </div>

                        </fieldset>
                    </div>
                </form>
            </div>

        </>
    );
};
export default AnotarConsulta