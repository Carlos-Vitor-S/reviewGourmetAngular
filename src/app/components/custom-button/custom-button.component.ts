import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //pega o texto que irá ser exibido no botão
  @Input() replace: string = '';

  action() {}
}
