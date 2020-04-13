import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-manejo-entrada-index',
  templateUrl: './manejo-entrada-index.component.html',
  styleUrls: [`./manejo-entrada-index.component.scss`],
})
export class ManejoEntradaIndexComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }


}
