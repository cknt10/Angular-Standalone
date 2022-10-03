import { Component, OnInit } from '@angular/core';
import { MrobserverService } from 'src/app/services/mrobserver.service';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private obService: MrobserverService) { }

  ngOnInit(): void {
  }


  dispatchNewValue () {

  }
}
