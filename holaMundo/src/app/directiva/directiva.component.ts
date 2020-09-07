import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando: boolean = true;
  nombresUser: Array<string> = ["Maria","Ana","Juan","Pedro"]
  pestana : string = "";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
      console.log(this.cargando);
    }, 1000);
  }//end init


  cambiarPestana(pestana: string){
    this.pestana = pestana;

  }


}
