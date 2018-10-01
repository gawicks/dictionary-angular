import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { DictionaryEntry } from '../../app.interfaces';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})
export class WordlistComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }
  public words: Observable<DictionaryEntry[]>;

  ngOnInit() {
    this.words =  this.dataService.getEntries().pipe(toArray());
  }

}
