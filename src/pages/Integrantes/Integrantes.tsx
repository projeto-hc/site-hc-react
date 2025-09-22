import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Julia from '../../assets/imagens/julia.jpg';
import Mariana from '../../assets/imagens/mariana.jpg';
import Yanick from '../../assets/imagens/yanick.jpg';


const Integrantes = () => {
    return (
        <>
            <Header />

            <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center">
                <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-3xl mx-auto py-4">Integrantes</h1>


                <div>

                    <div className="w-full py-4">
                        <img src={Julia} alt="Júlia" className="w-44 h-60 rounded border border-black" />

                        <div className="text-black text-base py-3">
                            <p>Nome: Júlia Tiziotto Buttler</p>
                            <p>RM: 564975</p>
                            <p>Turma: 1TDSA</p>
                            <p>GitHub: <a href="https://github.com/JuliaTButtler">JuliaTButtler</a></p>
                            <p>Linkedin: <a href="https://www.linkedin.com/in/j%C3%BAlia-t-buttler-2b842b367/">Júlia T Buttler</a></p>
                        </div>
                    </div>
                    <div className="w-full py-4">
                        <img src={Mariana} alt="Mariana" className="w-44 h-60 rounded border border-black" />

                        <div className="text-black text-base py-3">
                            <p>Nome: Mariana Xavier Quispe</p>
                            <p>RM: 566357</p>
                            <p>Turma: 1TDSA</p>
                            <p>GitHub: <a href="https://github.com/Marixavq">Marixavq</a></p>
                            <p>Linkedin: <a href="https://www.linkedin.com/in/mariana-xavier-quispe-095b81305/">Mariana Xavier Quispe</a></p>
                        </div>
                    </div>
                    <div className="w-full py-4">
                        <img src={Yanick} alt="Yanick" className="w-44 h-60 rounded border border-black" />

                        <div className="text-black text-base py-3">
                            <p>Nome: Yanick José Zen dos Santos</p>
                            <p>RM: 558350</p>
                            <p>Turma: 1TDSA</p>
                            <p>GitHub: <a href="https://github.com/yanick3">yanick3</a></p>
                            <p>Linkedin: <a href="https://www.linkedin.com/in/yanick-santos-8ba750302/">Yanick Santos</a></p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Integrantes