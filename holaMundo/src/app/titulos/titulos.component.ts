import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre : string = 'Sebastian';
  appPaterno : string = 'Gaete';
  alumno : any = {
    nombre : 'Patricia',
    appPaterno : 'Astudillo'

  };
  constructor() { }

  ngOnInit(): void {
  }

}
