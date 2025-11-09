import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

import Titulo from "../../components/Titulo/Titulo";

type Consulta = {
    id?: number;
    data: string;
    horario: string;
    especialidade: string;
    profissional: string;
};

const Consultas = () => {
    const [consultas, setConsultas] = useState<Consulta[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const API_URL = "http://localhost:8080/aluno";

    useEffect(() => {
        fetchConsultas();
    }, []);

    const fetchConsultas = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Erro ao buscar consultas.");
            const data = await response.json();
            setConsultas(data);
        } catch (err) {
            setError(`Falha ao carregar a lista de consultas. Erro: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    const deletarConsulta = async (consulta: Consulta) => {
        if (!window.confirm(`Deseja realmente excluir a consulta de "${consulta.especialidade}"?`))
            return;
        try {
            const response = await fetch(`${API_URL}/${consulta.id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setConsultas((prev) => prev.filter((a) => a.id !== consulta.id));
                alert(`A consulta "${consulta.especialidade}" foi excluída com sucesso.`);
            } else {
                alert(`Erro ao excluir consulta "${consulta.especialidade}".`);
            }
        } catch (error) {
            alert(`Erro de conexão com o servidor.${error}`);
        }
    };

    const editarConsulta = (consulta: Consulta) => {
        navigate("/atualizar", { state: consulta });
    };

    // ---------   fim conexão API  -----------

    return (
        <>
            <div className="bg-[#d9d9d9] flex flex-col items-center">
                <Titulo texto="Consultas marcadas"></Titulo>

                <p className="text-base text-center pb-4 lg:text-lg">Marque sua consulta no app do HC e anote aqui para ser lembrado. Clique nos campos para editar os dados.</p>

                <div className="mx-auto shadow-xl rounded-xl p-8 border border-black">
                    <div className="flex justify-end items-center mb-6">

                        <button onClick={fetchConsultas} className="text-black border border-black bg-transparent hover:text-blue-950 px-4 py-2 rounded-md transition duration-300">
                            Atualizar Lista
                        </button>
                    </div>

                    {loading && (
                        <p className="text-center py-4">
                            Carregando consultas...
                        </p>
                    )}
                    {error && <p className="text-red-500 text-center py-4">{error}</p>}

                    {!loading && consultas.length === 0 && !error && (
                        <p className="text-gray-500 text-center py-4">
                            Nenhuma consulta cadastrada ainda.
                        </p>
                    )}

                    {!loading && consultas.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 text-sm text-gray-900">
                                <thead className="bg-blue-700 text-white">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Data</th>
                                        <th className="border border-gray-300 px-4 py-2">Horário</th>
                                        <th className="border border-gray-300 px-4 py-2">Especialidade</th>
                                        <th className="border border-gray-300 px-4 py-2">Médico (Profissional)</th>
                                        <th
                                            className="border border-gray-300 px-4 py-2 text-center"
                                            colSpan={2}
                                        >
                                            Ação
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consultas.map((consulta) => (
                                        <tr
                                            key={consulta.id}
                                            className="hover:bg-gray-100 transition duration-150"
                                        >
                                            <td className="border border-gray-300 px-4 py-2"> {consulta.data} </td>
                                            <td className="border border-gray-300 px-4 py-2"> {consulta.horario} </td>
                                            <td className="border border-gray-300 px-4 py-2"> {consulta.especialidade} </td>
                                            <td className="border border-gray-300 px-4 py-2"> {consulta.profissional} </td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <button
                                                    onClick={() => editarConsulta(consulta)}
                                                    className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-md text-xs transition duration-200"
                                                >
                                                    Atualizar
                                                </button>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <button
                                                    onClick={() => deletarConsulta(consulta)}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs transition duration-200"
                                                >
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <p className="bg-[#417571] p-2 border my-6 border-black rounded-md text-base text-white lg:text-lg"><Link to="/AnotarConsultas">Adicionar consultas</Link></p>
            </div>
        </>
    );
}
export default Consultas