import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import chevrond from '../../assets/imagens/chevron-down.svg'
const Faq = () => {
    return (
        <>
        <Header/>

            <div className="bg-[#d9d9d9] flex flex-col items-center p- space-y-2 p-8">
                <h1 className="font-bold text-xl text-center md:text-2xl lg:text-3xl">FAQ</h1>

                <p className="text-base justify-items-center w-80 md:text-2xl lg:w-3/5 lg:text-2xl mx-auto text-center pb-4">Bem vindo(a) a nossa sessão de perguntas frequentes. Caso não encontre a resposta para sua dúvida aqui, acesse a página Chat, ou Contato para falar diretamente com a equipe de suporte.</p>

                <div>
                    <div className="border border-black rounded p-5 w-80 md:w-96">
                        <button className="text-xl">
                            <span>Primeiro acesso ao app HC</span>
                            <img src={chevrond} alt="" className="w-5 h-5" />
                            <div className="text-base">
                                <p>Clique no botão <b>Acessar Portal</b>. Digite seu CPF e sua senha cadastrada
                                    anteriormente. Clique em <b>Acessar</b>. </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Faq;