import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { UsuarioModel } from "../../models/usuario.model";
import { AuthService } from "../../service/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private auth: AuthService, private router:Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Espere por favor...",
    });
    Swal.showLoading();
    this.auth.NuevoUsuario(this.usuario)
        .subscribe(resp => {
          console.log(resp);
          Swal.close();
          this.router.navigateByUrl('/home');

        },(err)=>{
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Error al autenticar",
            text: err.error.error.message,
          });
        });
  }
}
