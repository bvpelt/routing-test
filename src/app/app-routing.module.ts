import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildaComponent } from './second/childa/childa.component';
import { ChildbComponent } from './second/childb/childb.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'first/:id', component: FirstComponent },
  {
    path: 'first', component: FirstComponent
  },
  {
    path: 'second', component: SecondComponent, children: [
      { path: 'child-a', component: ChildaComponent },
      { path: 'child-b', component: ChildbComponent },
    ]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({paramsInheritanceStrategy: 'always'})),
  //  provideRouter(routes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule { }
