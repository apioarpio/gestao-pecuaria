import {Component, OnInit} from '@angular/core';
import {NbPosition, NbSortDirection, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';

@Component({
  selector: 'ngx-animais-coletados-list',
  templateUrl: './animais-coletados-list.component.html',
  styleUrls: ['./animais-coletados-list.component.scss'],
})
export class AnimaisColetadosListComponent implements OnInit {

  customColumn = 'name';
  defaultColumns = ['size', 'kind', 'items'];
  allColumns = ['id', 'raca', 'area', 'lote', 'aparte'];

  animaisColetados = [{
    data: {
      id: 55051512089,
      raca: 'Nelore',
      area: 'Modulo 1',
      lote: 'lote 09/20',
      aparte: 'Aparte 3',
    },
  }];

  dataSource: NbTreeGridDataSource<any>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  position = NbPosition.END;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>,
  ) {
  }

  ngOnInit(): void {
    this.dataSource = this.dataSourceBuilder.create(this.animaisColetados);
  }

}
