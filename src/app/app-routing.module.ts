import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FosComponent } from './fos/fos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'fos', component: FosComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
