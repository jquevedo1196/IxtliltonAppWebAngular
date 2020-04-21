import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-sing',
  templateUrl: './footer-sing.component.html',
  styleUrls: ['./footer-sing.component.scss']
})
export class FooterSingComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
