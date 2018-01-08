import { NgModule } from '@angular/core';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [TemplateRoutingModule],
  declarations: [TemplateComponent],
  exports: [TemplateComponent]
})
export class TemplateModule {}
