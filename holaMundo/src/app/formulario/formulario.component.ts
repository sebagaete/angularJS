import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;

  constructor()
  {
    this.nombre = this.nombre;
    this.apellido = this.apellido;
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  alumno: Alumno = new Alumno();
  listadoAlumno : Array<Alumno> = new Array<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }


  btnGuardarAlumno(){

    this.listadoAlumno.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido
    })
    this.alumno.nombre = "";
    this.alumno.apellido = "";

  }

}
