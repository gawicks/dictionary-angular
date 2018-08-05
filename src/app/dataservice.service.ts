import { Injectable, OnInit } from '@angular/core';
import { initializeApp, firestore } from 'firebase';
import { from, Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import * as firebase from '../../node_modules/firebase';
import { DictionaryEntry } from './app.interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private readonly db: firestore.Firestore;
  private readonly username = 'gawicks';

  constructor() {

  // userdata/userid/dictionaries/main/words/exampleword

  const config = {
    apiKey: 'AIzaSyAr7gtn5OCIIQbDoCNzY-IHsux0nV-Y3dk',
    authDomain: 'dictionary-c38b5.firebaseapp.com',
    databaseURL: 'https://dictionary-c38b5.firebaseio.com',
    projectId: 'dictionary-c38b5',
    storageBucket: 'dictionary-c38b5.appspot.com',
    messagingSenderId: '32431209778'
  };
  const app = initializeApp(config);
  // Initialize Cloud Firestore through Firebase
   const _db = app.firestore();
   const settings = { timestampsInSnapshots: true};
   _db.settings(settings);
   this.db = _db;

  }
  public getEntries(): Observable<DictionaryEntry> {
    return from(this.db.collection(`/userdata/${this.username}/dictionaries/main/words`).get())
    .pipe(mergeMap(e => e.docs), map(e =>  ({ word: e.id, definition: e.get('definition'), tags: e.get('tags') })));
  }
  public addEntry(entry: DictionaryEntry ) {
    return from(this.db.collection(`/userdata/${this.username}/dictionaries/main/words`)
          .doc(entry.word).set({ definition: entry.definition, tags: entry.tags || []}));
  }

}
