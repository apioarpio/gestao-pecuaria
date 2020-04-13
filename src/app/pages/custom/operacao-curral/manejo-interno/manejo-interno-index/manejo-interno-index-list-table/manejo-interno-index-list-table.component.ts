import {Component, OnInit} from '@angular/core';
import {
  NbPosition,
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';
// tslint:disable-next-line:max-line-length
import {TreeNode} from '../../../manejo-entrada/manejo-entrada-index/manejo-entrada-index-list-table/manejo-entrada-index-list-table.component';
import {ManejoInterno, ManejoInternoService} from '../../../../../../services/manejo-interno.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-manejo-interno-index-list-table',
  templateUrl: './manejo-interno-index-list-table.component.html',
  styleUrls: ['./manejo-interno-index-list-table.component.scss'],
})
export class ManejoInternoIndexListTableComponent implements OnInit {

  customColumn = 'name';
  defaultColumns = ['size', 'kind', 'items'];
  allColumns = ['id', 'nome', 'quantidadeAnimais', 'data', 'options'];

  position = NbPosition.END;

  dataSource: NbTreeGridDataSource<ManejoInterno>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  private data: TreeNode<ManejoInterno>[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<ManejoInterno>,
    private manejoInternoService: ManejoInternoService,
  ) {
    this.updateManejos();
    this.dataSource = this.dataSourceBuilder.create(this.data);
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
    this.manejoInternoService.getManejos().forEach(manejo => {
      this.data.push({data: manejo});
    });
  }

  goColeta() {
    this.router.navigate(['../../coleta-animais'], {relativeTo: this.route});
  }

  ngOnInit(): void {
  }
}
