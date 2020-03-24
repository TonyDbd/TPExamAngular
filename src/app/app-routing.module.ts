import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddordiComponent } from './components/addordi/addordi.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EditordiComponent } from './components/editordi/editordi.component';
import { DetailordiComponent } from './components/detailordi/detailordi.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addordi', component: AddordiComponent},
  {path: 'editordi/:id', component: EditordiComponent},
  {path: 'detailordi/:id', component: DetailordiComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
