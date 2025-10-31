import { useState } from "react";
import { useForm } from "react-hook-form";

import Botao from "../../components/Botao/Botao";
import Titulo from "../../components/Titulo/Titulo";

type CadastroFormInputs = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
};

const Cadastro = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CadastroFormInputs>();
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (data: CadastroFormInputs) => {
    console.log(data);
    setEnviado(true);
    reset();
  };

  return (
    <>
      <div className="bg-[#d9d9d9] flex flex-col space-y-2 p-8 justify-center">
        <Titulo texto="Cadastro" />
        <div className="flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <fieldset className="border border-black rounded-lg p-6 space-y-4">
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  className="bg-transparent border border-black rounded-sm w-full"
                  {...register("nome", { required: true })}
                />
                {errors.nome && <p className="text-red-500 text-sm">Campo obrigatório</p>}
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border border-black rounded-sm w-full"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 text-sm">Campo obrigatório</p>}
              </div>

              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  className="bg-transparent border border-black rounded-sm w-full"
                  {...register("senha", { required: true })}
                />
                {errors.senha && <p className="text-red-500 text-sm">Campo obrigatório</p>}
              </div>

              <div>
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmarSenha"
                  className="bg-transparent border border-black rounded-sm w-full"
                  {...register("confirmarSenha", { required: true })}
                />
                {errors.confirmarSenha && <p className="text-red-500 text-sm">Campo obrigatório</p>}
              </div>

              <div className="flex justify-end">
                <Botao texto="Cadastrar" />
              </div>

              {enviado && <p className="text-green-600 text-center pt-4">Cadastro realizado com sucesso!</p>}
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
