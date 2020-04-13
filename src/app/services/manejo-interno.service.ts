import {Injectable} from '@angular/core';

export interface ManejoInterno {
  id: number;
  nome: string;
  quantidadeAnimais: number;
  data: Date;
  items?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ManejoInternoService {

  private manejos: ManejoInterno[] = [
    {id: 1, nome: 'Troca de Pasto', quantidadeAnimais: 300, items: 5, data: new Date('10/04/2020')},
    {id: 2, nome: 'Vacinação', quantidadeAnimais: 210, items: 2, data: new Date('10/04/2020')},
    {id: 3, nome: 'Troca de Pasto', quantidadeAnimais: 500, items: 2, data: new Date('10/04/2020')},
  ];

  constructor() {
  }

  getManejos(): ManejoInterno[] {
    return this.manejos;
  }

  addManejo(manejo: ManejoInterno): void {
    this.manejos.push(manejo);
  }

}
