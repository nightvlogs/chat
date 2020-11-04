import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'message',
    loadChildren: './message/message.module#MessageModule'
  },
  {
    path: '**',
    redirectTo: 'auth'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
