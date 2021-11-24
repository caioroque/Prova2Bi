import { VendaService } from './../../../../../services/venda.service';
import { Venda } from './../../../../../models/venda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit {

  venda: Venda[] = [];
    colunasExibidas: String[] = [
        "id",
        "cliente",
        "item",
        "formapag",
    ];

    constructor(private service: VendaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((vendas) => {
            this.venda = vendas;
        });
    }

}
