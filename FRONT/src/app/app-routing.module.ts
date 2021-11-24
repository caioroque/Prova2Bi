import { ListarComprasComponent } from './components/views/home/final-compra/listar-compras/listar-compras.component';
import { FinalCompraComponent } from './components/views/home/final-compra/final-compra.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrinhoComponent } from "./components/views/home/carrinho/carrinho.component";
import { IndexComponent } from "./components/views/home/index/index.component";
import { CadastrarProdutoComponent } from "./components/views/produto/cadastrar-produto/cadastrar-produto.component";
import { ListarProdutoComponent } from "./components/views/produto/listar-produto/listar-produto.component";

const routes: Routes = [
    {
        path: "venda/list",
        component: ListarComprasComponent,
    },
    {
        path: "venda/create",
        component: FinalCompraComponent,
    },
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "home/carrinho",
        component: CarrinhoComponent,
    },
    {
        path: "produto/listar",
        component: ListarProdutoComponent,
    },
    {
        path: "produto/cadastrar",
        component: CadastrarProdutoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
