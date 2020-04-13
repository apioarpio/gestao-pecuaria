import {NgModule} from '@angular/core';

import {OperacoesCurralRouingModule} from './operacoes-curral-rouing.module';
import {ManejoEntradaIndexComponent} from './manejo-entrada/manejo-entrada-index/manejo-entrada-index.component';
import {
  NbButtonModule,
  NbCardModule, NbDatepickerModule,
  NbFormFieldModule, NbIconModule,
  NbInputModule,
  NbListModule, NbPopoverModule, NbSelectModule, NbTabsetModule,
  NbTreeGridModule,
} from '@nebular/theme';
import {ManejoEntradaCreateComponent} from './manejo-entrada/manejo-entrada-create/manejo-entrada-create.component';
import {ManejoEntradaEditComponent} from './manejo-entrada/manejo-entrada-edit/manejo-entrada-edit.component';
import {
  ManejoEntradaIndexListTableComponent,
// tslint:disable-next-line:max-line-length
} from './manejo-entrada/manejo-entrada-index/manejo-entrada-index-list-table/manejo-entrada-index-list-table.component';
import {ManejoEntradaToolbarComponent} from './manejo-entrada/manejo-entrada-shared-components/manejo-entrada-toolbar/manejo-entrada-toolbar.component';
import {ManejoFormComponent} from './manejo-shared-components/manejo-form/manejo-form.component';
import {FormsModule} from '@angular/forms';
import {ManejoInternoCreateComponent} from './manejo-interno/manejo-interno-create/manejo-interno-create.component';
import {ManejoInternoIndexComponent} from './manejo-interno/manejo-interno-index/manejo-interno-index.component';
import {ManejoSaidaIndexComponent} from './manejo-saida/manejo-saida-index/manejo-saida-index.component';
import {ManejoSaidaCreateComponent} from './manejo-saida/manejo-saida-create/manejo-saida-create.component';
// tslint:disable-next-line:max-line-length
import {ManejoSaidaIndexListTableComponent} from './manejo-saida/manejo-saida-index/manejo-saida-index-list-table/manejo-saida-index-list-table.component';
import {ManejoInternoIndexListTableComponent} from './manejo-interno/manejo-interno-index/manejo-interno-index-list-table/manejo-interno-index-list-table.component';
import {ColetaAnimalComponent} from './coleta-animal/coleta-animal.component';
import {ColetaAnimaisFormComponent} from './coleta-animal/coleta-animais-form/coleta-animais-form.component';
import {IndicadoresColetaComponent} from './coleta-animal/indicadores-coleta/indicadores-coleta.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {AnimaisColetadosListComponent} from './coleta-animal/animais-coletados-list/animais-coletados-list.component';
import {TiposAnimaisColetadosComponent} from "./coleta-animal/tipos-animais-coletados/tipos-animais-coletados.component";

@NgModule({
  declarations: [
    // entrada
    ManejoEntradaIndexComponent,
    ManejoEntradaCreateComponent,
    ManejoEntradaEditComponent,
    ManejoEntradaIndexListTableComponent,
    ManejoEntradaToolbarComponent,
    // saida
    ManejoSaidaIndexComponent,
    ManejoSaidaCreateComponent,
    ManejoSaidaIndexListTableComponent,
    // interno
    ManejoInternoCreateComponent,
    ManejoInternoIndexComponent,
    ManejoInternoIndexListTableComponent,
    // coleta-animal
    ColetaAnimalComponent,
    AnimaisColetadosListComponent,
    ColetaAnimaisFormComponent,
    IndicadoresColetaComponent,
    // shared
    ManejoFormComponent,
    TiposAnimaisColetadosComponent,
  ],
  imports: [
    OperacoesCurralRouingModule,

    // nebular
    NbCardModule,
    NbFormFieldModule,
    NbInputModule,
    NbTreeGridModule,
    NbListModule,
    NbButtonModule,
    NbIconModule,
    NbDatepickerModule,
    FormsModule,
    NbPopoverModule,
    NbTabsetModule,
    NbSelectModule,
    NgxEchartsModule,
  ],
})
export class OperacoesCurralModule {
}
