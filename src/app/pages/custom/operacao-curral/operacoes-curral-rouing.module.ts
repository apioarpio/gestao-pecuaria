import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {ColetaAnimalComponent} from './coleta-animal/coleta-animal.component';
import {ManejoEntradaIndexComponent} from './manejo-entrada/manejo-entrada-index/manejo-entrada-index.component';
import {ManejoEntradaCreateComponent} from './manejo-entrada/manejo-entrada-create/manejo-entrada-create.component';
import {ManejoInternoIndexComponent} from './manejo-interno/manejo-interno-index/manejo-interno-index.component';
import {ManejoInternoCreateComponent} from './manejo-interno/manejo-interno-create/manejo-interno-create.component';
import {ManejoSaidaIndexComponent} from './manejo-saida/manejo-saida-index/manejo-saida-index.component';
import {ManejoSaidaCreateComponent} from './manejo-saida/manejo-saida-create/manejo-saida-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index',
  },
  {
    path: 'manejo-entrada',
    children: [
      {
        path: 'index',
        component: ManejoEntradaIndexComponent,
      },
      {
        path: 'create',
        component: ManejoEntradaCreateComponent,
      },
    ],
  },
  {
    path: 'manejo-interno',
    children: [
      {
        path: 'index',
        component: ManejoInternoIndexComponent,
      },
      {
        path: 'create',
        component: ManejoInternoCreateComponent,
      },
    ],
  },
  {
    path: 'manejo-saida',
    children: [
      {
        path: 'index',
        component: ManejoSaidaIndexComponent,
      },
      {
        path: 'create',
        component: ManejoSaidaCreateComponent,
      },
    ],
  },
  {
    path: 'coleta-animais',
    component: ColetaAnimalComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class OperacoesCurralRouingModule {
}
