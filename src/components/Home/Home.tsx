// sendo feito no mobile (375 por 667)

const Home = () => {
    return (
        <>
            <main>
                <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8 justify-center ">
                    <h1 className="font-bold lg:text-3xl mx-auto py-4">Seu Guia para as Consultas de Reabilitação Online</h1>

                    <p className="text-base justify-items-center lg:w-3/5 lg:text-2xl mx-auto text-center pb-4">Sabemos que participar de consultas online pode parecer complicado. Este site foi criado para te ajudar em cada passo, tornando tudo mais simples e tranquilo.</p>

                    <div className="bg-[#417571] w-50 h-50 border border-black rounded-xl p-3 flex flex-col lg:w-96 p-6 mx-auto">
                        <h2 className="font-bold text-white text-2xl self-center lg: text-3xl">Precisa de ajuda?</h2>
                        <p className="text-white text-center lg:text-2xl">Conheça SaúdeBot, que vai te guiar na preparação para a consulta e esclarece suas dúvidas.</p>

                        <button className="bg-white border border-black rounded-lg p-2 self-center">Clique aqui</button>
                    </div>
                </div>

            </main>
        </>

    );
};
export default Home;