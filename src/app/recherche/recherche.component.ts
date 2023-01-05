import { Offre } from './../model/offre.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  offresData?: Offre[]
  offres:any
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getAllOffres().subscribe((data) => {
      this.offres = data;
      this.offresData = this.offres.offres;
      console.log(this.offresData);
    })
  }

}
