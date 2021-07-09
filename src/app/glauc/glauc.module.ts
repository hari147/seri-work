import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GlaucRoutingModule } from './glauc-routing.module';
import { GlaucComponent } from './glauc.component';

@NgModule({
    imports: [CommonModule, GlaucRoutingModule],
    declarations: [GlaucComponent]
})
export class GlaucModule {}
