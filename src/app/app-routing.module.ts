import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewWordComponent } from './components/newWord/newWord.component';
import { WordlistComponent } from './components/wordlist/wordlist.component';
const routes: Routes = [
  {
    path: 'newWord',
    component: NewWordComponent
  },
  {
    path: 'list',
    component: WordlistComponent
  },
  {
    path: '**',
    component: NewWordComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
