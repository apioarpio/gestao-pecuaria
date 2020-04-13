import { Injectable } from '@angular/core';

export interface ManejoSaida {
  id: number;
  nome: string;
  quantidadeAnimais: number;
  data: Date;
  items?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ManejoSaidaService {

  private manejos: ManejoSaida[] = [
    {id: 1, nome: 'Saida Transferencia', quantidadeAnimais: 20, items: 5, data: new Date('10/04/2020')},
    {id: 2, nome: 'Saida Venda', quantidadeAnimais: 210, items: 2, data: new Date('10/04/2020')},
    {id: 3, nome: 'Saida Venda', quantidadeAnimais: 159, items: 2, data: new Date('10/04/2020')},
  ];
  constructor() { }

  getManejos(): ManejoSaida[] {
    return this.manejos;
  }

  addManejo(manejo: ManejoSaida): void {
    this.manejos.push(manejo);
  }

}
