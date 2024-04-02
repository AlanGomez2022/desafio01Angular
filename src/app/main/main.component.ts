import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  curso = '';
  muestra6to=false; 
  alumnos6to=[
    {dni:34943846, Nombre:'Alan', Apellido:'Gomez', asistencia:false},
    {dni:34931090, Nombre:'Romina', Apellido:'Barragan', asistencia:true},
    {dni:53587322, Nombre:'Catalina', Apellido:'Gomez', asistencia:false},
    {dni:13218124, Nombre:'Marta', Apellido:'Maspero', asistencia:true},
    {dni:13241711, Nombre:'Omar', Apellido:'Gomez', asistencia:false}
  ]
  mostrar6to(){
    this.muestra6to=!this.muestra6to;
    this.curso='6to año'
  }

  cambiarPresente(){

  }
  cambiarAusente(){

  }
}
