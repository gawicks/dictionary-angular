import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { concat } from 'rxjs';
import { switchMap, tap } from '../../node_modules/rxjs/operators';
import { DictionaryEntry } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-dictionary';
  model: DictionaryEntry = { word: '', definition: ''};
  ongoingSubmit = false;
  constructor(private dataService: DataserviceService) {
    //
  }

  public ngOnInit(): void {
    //
  }

  public onSubmit() {
    this.ongoingSubmit = true;
    this.dataService.addEntry({ word: this.model.word, definition: this.model.definition})
    .subscribe(
      e => { alert('Added successfully'); this.ongoingSubmit = false; }
    , e => { alert ('Could not add word to dictionary');  this.ongoingSubmit = false; });
  }

}
