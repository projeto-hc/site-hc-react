import { Link } from "react-router-dom"
import { useState } from "react";

import Titulo from "../../components/Titulo/Titulo";

const Consultas = () => {

    const [agendamentos, setAgendamentos] = useState([

        {
            id_agendamento: 1,
            dataHora: "25/10/2025 14:00",
            especialidade: "Psicologia",
            medico: "Dr. Roberta",
        },
        {
            id_agendamento: 2,
            dataHora: "26/10/2025 09:30",
            especialidade: "Fonoaudiologia",
            medico: "Dr. Carlos",
        },
    ]);

    // Atualiza um campo específico de um agendamento
    const handleChange = (
        id_agendamento: number,
        field: string, //qual campo do agendamento será alterado
        value: string //novo valor para esse campo
    ) => {
        setAgendamentos(
            agendamentos.map((a) =>
                a.id_agendamento === id_agendamento ? { ...a, [field]: value } : a
            )
        );
    };

    // Remove um agendamento
    const handleDelete = (id_agendamento: number) => {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            setAgendamentos(agendamentos.filter((a) => a.id_agendamento !== id_agendamento));
        }
    };


    return (
        <>
            <div className="bg-[#d9d9d9] flex flex-col items-center">
                <Titulo texto="Consultas marcadas"></Titulo>
                <p className="text-base text-center pb-4 lg:text-lg">Marque sua consulta no app do HC e anote aqui para ser lembrado. Clique nos campos para editar os dados.</p>

                
                <ul className="w-11/12 md:flex">
                    {agendamentos.map((a) => (
                        <li key={a.id_agendamento} className="bg-[#d9d9d9] m-4 p-3 border rounded-md border-black flex flex-col md:w-2/3 ">

                            <input
                                type="text"
                                value={a.dataHora}
                                onChange={(e) =>
                                    handleChange(a.id_agendamento, "dataHora", e.target.value)
                                }
                                placeholder="Data e Hora" className="p-1 bg-transparent cursor-text lg:text-lg"
                            />
                            <input
                                type="text"
                                value={a.especialidade}
                                onChange={(e) =>
                                    handleChange(a.id_agendamento, "especialidade", e.target.value)
                                }
                                placeholder="Especialidade" className="p-1 bg-transparent cursor-text lg:text-lg"
                            />
                            <input
                                type="text"
                                value={a.medico}
                                onChange={(e) =>
                                    handleChange(a.id_agendamento, "medico", e.target.value)
                                }
                                placeholder="Médico" className="p-1 bg-transparent cursor-text lg:text-lg"
                            />

                            <button type="button" className="my-4 max-w-16 bg-[#417571] rounded-md p-2 border border-black" onClick={() => handleDelete(a.id_agendamento)}>
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="bg-[#417571] p-2 border my-6 border-black rounded-md text-base text-white lg:text-lg"><Link to="/AnotarConsultas">Adicionar consultas</Link></p>
            </div>
        </>
    );
}
export default Consultas