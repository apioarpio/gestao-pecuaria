import {Component, OnInit, ViewChild} from '@angular/core';
import {
  NbPosition,
  NbSortDirection,
  NbSortRequest, NbTreeGridComponent,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbTreeGridRowComponent,
} from '@nebular/theme';
import {ManejoEntradaService} from '../../../../../../services/manejo-entrada-service.service';
import {ActivatedRoute, Router} from '@angular/router';

export interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

export interface ManejoEntrada {
  id: number;
  nome: string;
  quantidadeAnimais: number;
  data: Date;
  items?: number;
}
@Component({
  selector: 'ngx-manejo-entrada-index-list-table',
  templateUrl: './manejo-entrada-index-list-table.component.html',
  styleUrls: ['./manejo-entrada-index-list-table.component.scss'],
})
export class ManejoEntradaIndexListTableComponent implements OnInit {
  customColumn = 'name';
  defaultColumns = ['size', 'kind', 'items'];
  allColumns = ['id', 'nome', 'quantidadeAnimais', 'data', 'options'];

  dataSource: NbTreeGridDataSource<ManejoEntrada>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  position = NbPosition.END;

  private data: TreeNode<ManejoEntrada>[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<ManejoEntrada>,
    private manejoEntradaService: ManejoEntradaService,
  ) {
    this.updateManejos();
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  goColeta() {
    this.router.navigate(['../../coleta-animais'], {relativeTo: this.route});
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  updateManejos(): void {
    this.data = [];
    this.manejoEntradaService.getManejos().forEach(manejo => {
      this.data.push({data: manejo});
    });
  }

  ngOnInit(): void {
  }

}
