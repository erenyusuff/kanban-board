import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from "./board/board.component";

const routes: Routes = [
  {path: 'boards/:id', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
