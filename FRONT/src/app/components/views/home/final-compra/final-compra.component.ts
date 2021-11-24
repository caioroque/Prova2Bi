import { VendaService } from './../../../../services/venda.service';
import { Venda } from './../../../../models/venda';
import { ItemService } from './../../../../services/item.service';
import { FormaPagService } from './../../../../services/formapag.service';
import { Router } from '@angular/router';
import { ItemVenda } from './../../../../models/item-venda';
import { Component, OnInit } from '@angular/core';
import { formaPag } from 'src/app/models/formaPag';

@Component({
  selector: 'app-final-compra',
  templateUrl: './final-compra.component.html',
  styleUrls: ['./final-compra.component.css']
})
export class FinalCompraComponent implements OnInit {
    cliente!: string;
    itens!: ItemVenda[];
    itemId!: number;
    formapagId!: number;
    formapags!: formaPag[];


  constructor(
    private router: Router,
    private FormaPagService: FormaPagService,
    private itemService: ItemService,
    private VendaService: VendaService
  ) { }

  ngOnInit(): void {
    this.FormaPagService.list().subscribe((formapags) => {
      this.formapags = formapags;
  });
  }
  cadastrar(): void {
    let venda: Venda = {
        cliente: this.cliente,
        formapagId: this.formapagId,
        itemId: this.itemId,        
    };
    this.VendaService.create(venda).subscribe((venda) => {
        console.log(venda);
        this.router.navigate(["venda/list"]);
    });
}
}
