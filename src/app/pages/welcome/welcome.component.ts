import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message: string = `Hola mi nombre es Luis Daniel Ramirez Guerra, mi IS es LDRG2, tengo 25 años y vivo en Salamanca, Gto.`;

  displayedColumns: string[] = ['name', 'edad', 'is', 'ciudad', 'estado'];
  dataSource = [];

  constructor(private welcomeService: WelcomeService) {}

  ngOnInit() {
    this.welcomeService
      .getData()
      .subscribe((response) => (this.dataSource = response.my_data));
  }
}
