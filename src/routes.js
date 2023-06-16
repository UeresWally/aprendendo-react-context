import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento"

function Router() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
        <PagamentoProvider>
          <Routes>
            <Route path="/feira" element={ <Feira />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </PagamentoProvider>
      </CarrinhoProvider>
      </UsuarioProvider>
    </BrowserRouter>
  );
}

export default Router;
