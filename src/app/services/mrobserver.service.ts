import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MrobserverService {

  values : Observable<string[]>;

  constructor() {

    this.values = new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        observer.next([`${i++}`,"erstens", "zweitens", "drittens"]);
      }, 3000);
    })
  }

  getValues(){
    return this.values;
  }
}
