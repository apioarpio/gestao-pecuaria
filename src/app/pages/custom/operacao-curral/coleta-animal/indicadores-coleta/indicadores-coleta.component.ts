import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ngx-indicadores-coleta',
  templateUrl: './indicadores-coleta.component.html',
  styleUrls: ['./indicadores-coleta.component.scss'],
})
export class IndicadoresColetaComponent implements OnInit {

  quantidadeAnimais = 20;
  quantidadeConferida = 0;
  quantidadePendente = 10;
  macho = 8;
  femea = 2;
  totalConferidoDia = 0;
  pesoTotal = this.quantidadeAnimais * 290;
  pesoMedio = 0;

  options: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
