import {Component, OnInit} from '@angular/core';
import {
  NbPosition,
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';
import {
  TreeNode,
// tslint:disable-next-line:max-line-length
} from '../../../manejo-entrada/manejo-entrada-index/manejo-entrada-index-list-table/manejo-entrada-index-list-table.component';
import {ManejoSaida, ManejoSaidaService} from '../../../../../../services/manejo-saida.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-manejo-saida-index-list-table',
  templateUrl: './manejo-saida-index-list-table.component.html',
  styleUrls: ['./manejo-saida-index-list-table.component.scss'],
})
export class ManejoSaidaIndexListTableComponent implements OnInit {

  customColumn = 'name';
  defaultColumns = ['size', 'kind', 'items'];
  allColumns = ['id', 'nome', 'quantidadeAnimais', 'data', 'options'];

  dataSource: NbTreeGridDataSource<ManejoSaida>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  position = NbPosition.END;

  private data: TreeNode<ManejoSaida>[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<ManejoSaida>,
    private manejoSaidaService: ManejoSaidaService,
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
    this.manejoSaidaService.getManejos().forEach(manejo => {
      this.data.push({data: manejo});
    });
  }

  ngOnInit(): void {
  }
}
