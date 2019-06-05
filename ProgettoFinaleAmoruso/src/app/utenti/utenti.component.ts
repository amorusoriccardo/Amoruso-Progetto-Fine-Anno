import { Component, OnInit, Input } from '@angular/core';
import { Utente } from '../user';
@Component({
  selector: 'app-visua-utenti',
  templateUrl: './visua-utenti.component.html',
  styleUrls: ['./visua-utenti.component.css']
})
export class VisuaUtentiComponent implements OnInit {
  @Input() utenti : Utente[];
  constructor() { }

  ngOnInit() {
  }

}
