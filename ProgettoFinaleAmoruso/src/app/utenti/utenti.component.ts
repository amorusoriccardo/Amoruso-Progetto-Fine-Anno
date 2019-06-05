import { Component, OnInit, Input } from '@angular/core';
import { Utente } from '../user';
@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  @Input() utenti : Utente[];
  constructor() { }

  ngOnInit() {
  }

}
