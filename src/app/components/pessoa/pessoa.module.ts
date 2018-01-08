import { NgModule } from '@angular/core';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';

@NgModule({
  imports: [PessoaRoutingModule],
  declarations: [PessoaComponent],
  exports: [PessoaComponent]
})
export class PessoaModule {}
