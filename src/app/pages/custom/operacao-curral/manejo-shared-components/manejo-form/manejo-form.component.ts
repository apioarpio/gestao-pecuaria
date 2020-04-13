import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ManejoEntradaService} from '../../../../../services/manejo-entrada-service.service';
// tslint:disable-next-line:max-line-length
import {ManejoEntrada} from '../../manejo-entrada/manejo-entrada-index/manejo-entrada-index-list-table/manejo-entrada-index-list-table.component';
import {ManejoSaida, ManejoSaidaService} from '../../../../../services/manejo-saida.service';
import {ManejoInterno, ManejoInternoService} from '../../../../../services/manejo-interno.service';


@Component({
  selector: 'ngx-manejo-form',
  templateUrl: './manejo-form.component.html',
  styleUrls: ['./manejo-form.component.scss'],
})
export class ManejoFormComponent implements OnInit {

  /**
   * 1 - entrada
   * 2 - saida
   * 3 - intenro
   */
  @Input() tipoOperacao: number;

  fazenda: number;
  codOperacao: number;
  operacao: string;
  quantidadeAnimais: number;
  dataOperacao: Date;

  manejoEntrada: ManejoEntrada;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private manejoEntradaService: ManejoEntradaService,
    private manejoSaidaService: ManejoSaidaService,
    private manejoInternoService: ManejoInternoService,
  ) {
  }

  ngOnInit(): void {
  }

  salvar() {

    if (this.tipoOperacao === 1) {
      this.salvaManejoEntrada();
    } else if (this.tipoOperacao === 2) {
      this.salvaManejoSaida();
    } else if (this.tipoOperacao === 3) {
      this.salvaManejoInterno();
    }
    this.router.navigate(['../index'], {relativeTo: this.route});
  }

  salvaManejoEntrada() {
    const manejoEntrada: ManejoEntrada = {
      id: this.codOperacao,
      nome: this.operacao,
      quantidadeAnimais: this.quantidadeAnimais,
      data: new Date(this.dataOperacao),
    };

    this.manejoEntradaService.addManejo(manejoEntrada);
  }

  salvaManejoSaida() {
    const manejoSaida: ManejoSaida = {
      id: this.codOperacao,
      nome: this.operacao,
      quantidadeAnimais: this.quantidadeAnimais,
      data: new Date(this.dataOperacao),
    };

    this.manejoSaidaService.addManejo(manejoSaida);
  }

  salvaManejoInterno() {
    const manejoInterno: ManejoInterno = {
      id: this.codOperacao,
      nome: this.operacao,
      quantidadeAnimais: this.quantidadeAnimais,
      data: new Date(this.dataOperacao),
    };

    this.manejoInternoService.addManejo(manejoInterno);
  }

}
