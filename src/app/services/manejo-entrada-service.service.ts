import {Injectable} from '@angular/core';
// tslint:disable-next-line:max-line-length
import {ManejoEntrada} from '../pages/custom/operacao-curral/manejo-entrada/manejo-entrada-index/manejo-entrada-index-list-table/manejo-entrada-index-list-table.component';

@Injectable({
  providedIn: 'root',
})
export class ManejoEntradaService {

  private manejos: ManejoEntrada[] = [
    {id: 1, nome: 'Entrada Recria', quantidadeAnimais: 30, items: 5, data: new Date('10/04/2020')},
    {id: 2, nome: 'Entrada de animais rastreados', quantidadeAnimais: 120, items: 2, data: new Date('10/04/2020')},
    {id: 3, nome: 'Entrada de animais não rastreados', quantidadeAnimais: 109, items: 2, data: new Date('10/04/2020')},
  ];

  constructor() {
  }

  getManejos(): ManejoEntrada[] {
    return this.manejos;
  }

  addManejo(manejo: ManejoEntrada): void {
    this.manejos.push(manejo);
  }

}
