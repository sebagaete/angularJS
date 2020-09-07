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

  logoCodeStudy : string = 'https://scontent.fscl11-2.fna.fbcdn.net/v/t1.0-9/16387194_1213020415446569_5662279904580820675_n.png?_nc_cat=110&_nc_sid=e3f864&_nc_ohc=hdgDNS9jwO0AX-IRpCe&_nc_ht=scontent.fscl11-2.fna&oh=fa1ec1ef7efc63b54d61c537a7e939d1&oe=5F786B56';
  inputTxtTitulo : string = '';

  Email : string = '';
  Password : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  loginIn(event){

    if(event.key == 'Enter'){
      console.log(this.Email);
      console.log(this.Password);
    }
  }

  callDobleClick(){
    alert ('Ha Realizado Doble Click');
  }

  changePassword(){
    console.log(this.Password);
  }

  escribir(valor:string){
    console.log(valor);
  }

  focusText(event){

    console.log(event);
    event.srcElement.style.background = "red";
    event.srcElement.style.width = "200px";
  }

}
