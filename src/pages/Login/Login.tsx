import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Botao from "../../components/Botao/Botao";
import Titulo from "../../components/Titulo/Titulo";

type LoginFormInputs = {
  email: string;
  senha: string;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormInputs>();
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    setEnviado(true);
    reset();
  };

  return (
    <>
      <Header />
      <div className="bg-[#d9d9d9] flex flex-col space-y-2 p-8 justify-center">
        <Titulo texto="Login" />
        <div className="flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-96">
            <fieldset className="border border-black rounded-lg p-6">
              <p className="text-base text-center pb-4 lg:text-lg">
                Faça login para receber notificações de suas consultas marcadas...
              </p>

              <div className="pb-3">
                <label htmlFor="email" className="text-base lg:text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border border-black rounded-sm w-full"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 text-sm">Campo obrigatório</p>}
              </div>

              <div className="pb-3">
                <label htmlFor="senha" className="text-base lg:text-lg">Senha</label>
                <input
                  type="password"
                  id="senha"
                  className="bg-transparent border border-black rounded-sm w-full"
                  {...register("senha", { required: true })}
                />
                {errors.senha && <p className="text-red-500 text-sm">Campo obrigatório</p>}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-black text-base"><Link to="/Cadastro">Criar conta</Link></p>
                <Botao texto="Enviar" />
              </div>

              {enviado && <p className="text-green-600 text-center pt-4">Enviado com sucesso!</p>}
            </fieldset>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
