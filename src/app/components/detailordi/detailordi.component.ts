import { Component, OnInit } from '@angular/core';
import { Ordi } from 'src/app/models/ordi';
import { OrdiService } from 'src/app/services/ordi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailordi',
  templateUrl: './detailordi.component.html',
  styleUrls: ['./detailordi.component.css']
})
export class DetailordiComponent implements OnInit {
  ordi: Ordi;
  isLoading: boolean;
  constructor(private ordiservice: OrdiService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.ordiservice.getOneById(+this.activatedroute.snapshot.paramMap.get('id')).subscribe(data => {
      this.ordi = data;
      this.isLoading = false;
    })
  }

  marge(){
    return this.ordi.prixVente - this.ordi.prixAchat;
  }

}
