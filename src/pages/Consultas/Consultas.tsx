import { Link } from "react-router-dom"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import Titulo from "../../components/Titulo/Titulo";

const Consultas = () => {
    return (
        <>
            <Header />
            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                <Titulo texto="Consultas marcadas"></Titulo>
            </div>

            <p className="text-black text-base"><Link to="/AnotarConsultas">Adicionar consultas</Link></p>

            <Footer />
        </>
    );
}
export default Consultas