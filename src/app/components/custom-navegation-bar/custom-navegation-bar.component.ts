import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-navegation-bar',
  templateUrl: './custom-navegation-bar.component.html',
  styleUrls: ['./custom-navegation-bar.component.scss'],
})
export class CustomNavegationBarComponent implements OnInit {
  constructor() {}

  isMobileScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    // Verificar o tamanho da tela na inicialização
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileScreen = window.innerWidth < 824; // Defina o ponto de interrupção para a mudança da barra de ferramentas
  }
}
