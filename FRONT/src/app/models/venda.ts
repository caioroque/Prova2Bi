import { formaPag } from './formaPag';
import { ItemVenda } from './item-venda';
export interface Venda {
    id?: number;
    cliente: string;
    item?: ItemVenda;
    itemId: number;
    criadoEm?: Date;
    formapagId: number;
    formapag?: formaPag;
}
