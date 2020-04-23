import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-shared',
  templateUrl: './footer-shared.component.html',
  styleUrls: ['./footer-shared.component.scss']
})
export class FooterSharedComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
