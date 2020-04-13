import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-manejo-entrada-toolbar',
  templateUrl: './manejo-entrada-toolbar.component.html',
  styleUrls: ['./manejo-entrada-toolbar.component.scss'],
})
export class ManejoEntradaToolbarComponent implements OnInit {

  @Input() labelRightButton: string;
  @Input() hideRightButton = false;
  @Input() title: string;
  @Input() navigate: string;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  goCadastro() {
    this.router.navigate([this.navigate], {relativeTo: this.route});
  }

  voltar() {
    this.location.back();
  }

}
