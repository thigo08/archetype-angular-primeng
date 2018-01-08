import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent },
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'pessoa',
        loadChildren:
          'app/components/pessoa/pessoa.module#PessoaModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule {}
