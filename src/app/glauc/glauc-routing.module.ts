import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlaucComponent } from './glauc.component';

const routes: Routes = [
    {
        path: '',
        component: GlaucComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlaucRoutingModule {}
