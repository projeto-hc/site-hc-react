import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home";
import Consultas from "./pages/Consultas/Consultas"
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Integrantes from "./pages/Integrantes/Integrantes";
import Faq from "./pages/Faq/Faq";
import Chat from "./pages/Chat/Chat";
import Contato from "./pages/Contato/Contato";

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Consultas" element={<Consultas />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Integrantes" element={<Integrantes />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
