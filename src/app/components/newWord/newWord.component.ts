import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { DictionaryEntry } from '../../app.interfaces';

@Component({
    selector: 'app-new-word',
    templateUrl: './newWord.component.html',
    styleUrls: ['./newWord.component.scss']
  })
export class NewWordComponent implements OnInit {

    public get emptyEntry(): DictionaryEntry {
       return { word: '', definition: ''};
    }
    model: DictionaryEntry = this.emptyEntry;
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
        e => { alert('Added successfully'); this.ongoingSubmit = false; this.model = this.emptyEntry; }
      , e => { alert ('Could not add word to dictionary');  this.ongoingSubmit = false; });
    }

}
