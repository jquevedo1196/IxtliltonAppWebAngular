import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-log',
  templateUrl: './footer-log.component.html',
  styleUrls: ['./footer-log.component.scss']
})
export class FooterLogComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
