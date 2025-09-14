// sendo feito no mobile (375 por 667)

const Contato = () => {
    return (
        <>
            <main>
                <div className="bg-[#d9d9d9] flex flex-col p- space-y-2 p-8">
                    <h1 className="font-bold text-lg text-center">Contato</h1>

                    <fieldset className="border border-black rounded-lg p-5 w-70">

                        <div>
                            <label htmlFor="nome" className="text-base">Nome</label>
                            <input type="text" name="nome" id="nome" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-base">Email</label>
                            <input type="email" name="email" id="email" className=" bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="telefone"
                                className="text-base">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" className="bg-transparent border border-black rounded-sm w-full" />
                        </div>
                        <div>
                            <label htmlFor="mensagem" className="text-base">Telefone</label>
                            <textarea id="mensagem" name="mensagem" rows={5} className="bg-transparent border border-black rounded-sm w-full" ></textarea>
                        </div>

                    </fieldset>

                </div>
            </main>
        </>
    );
};
export default Contato;