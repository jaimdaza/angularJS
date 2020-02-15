import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";
import { Lista } from "src/app/models/lista.model";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"]
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList , { static: true}) lista: IonList;
  @Input() terminada = true;

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  listaSelecciona(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }
  async actualizarLista(lista: Lista) {
    const alert = await this.alertController.create({
      header: "Editar lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo,
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        {
          text: " Cancelar ",
          role: " cancel",
          handler: () => {
            console.log(" Cancelar ");
          }
        },
        {
          text: "Actualizar",

          handler: data => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }
}
