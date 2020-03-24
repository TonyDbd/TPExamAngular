import { Component, OnInit } from '@angular/core';
import { Ordi } from 'src/app/models/ordi';
import { OrdiService } from 'src/app/services/ordi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ordi: Ordi[];
  isLoading: boolean;

  constructor(private ordiservice: OrdiService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ordiservice.getAll().subscribe(data =>{
      this.ordi = data;
      this.isLoading = false;
    });
  }

deleteOrdi(ordi: Ordi) {
  this.isLoading = true;
  this.ordiservice.remove(ordi).subscribe(data => {
    this.ordiservice.getAll().subscribe(allOrdi => {
      this.ordi = allOrdi;
      this.isLoading = false;
    });
  });
}

marge(ordi : Ordi) {
  return ordi.prixVente - ordi.prixAchat;
}

}
