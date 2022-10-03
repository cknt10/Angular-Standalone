import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MrobserverService } from './services/mrobserver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'u14';

  value$: Observable<string[]>;

  constructor(private obService: MrobserverService){
    this.value$ = this.obService.getValues();
  }
}
