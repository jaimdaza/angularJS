import { Component, OnDestroy, Input } from "@angular/core";

@Component({
  selector: "app-grafico-barra-horizontal",
  templateUrl: "./grafico-barra-horizontal.component.html",
  styleUrls: ["./grafico-barra-horizontal.component.css"],
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Juegos";
  showYAxisLabel = true;
  yAxisLabel = "Votos";

  colorScheme = "nightLights";
  // intervalo;

  constructor() {
    /*
    console.log('tick');
    const newResults = [...this.results];
    this.intervalo = setInterval(() => {
      // tslint:disable-next-line: prefer-const
      // tslint:disable-next-line: forin
      for (let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500);
      }
      this.results = [...newResults];
    }, 1500);*/
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnDestroy(){
    // clearInterval(this.intervalo);
  }
}
