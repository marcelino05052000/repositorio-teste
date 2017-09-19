import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;

  constructor() { 
    this.usuario = new Usuario();
   
  }

  ngOnInit() {
  }

  enviarFormulario(){
    if(this.usuario.password == ""){

    }
    console.log(this.usuario.password);
    console.log(this.usuario.username);
  }

}
