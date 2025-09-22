function Botao  ({ texto } : { texto : string }) {
    return (
        <>
            <button className="bg-[#417571] p-2 border border-black rounded-sm text-base text-white lg:text-2xl">{texto}</button>
        </>
    );
}

export default Botao