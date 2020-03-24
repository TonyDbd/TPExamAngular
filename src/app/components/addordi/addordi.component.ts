import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdiService } from 'src/app/services/ordi.service';
import { Ordi } from 'src/app/models/ordi';

@Component({
  selector: 'app-addordi',
  templateUrl: './addordi.component.html',
  styleUrls: ['./addordi.component.css']
})
export class AddordiComponent implements OnInit {
  ordiForm: Ordi;
  marqueDispo: string[];
  typeDispo: string[];
  categorieDispo: string[];
  constructor(private router: Router, private ordiservice: OrdiService) { }

  ngOnInit() {
    
    this.marqueDispo = this.ordiservice.marqueDispo;
    console.log(this.marqueDispo);
    this.typeDispo = this.ordiservice.typeDispo;
    this.categorieDispo = this.ordiservice.categorieDispo;
    this.ordiForm = new Ordi();
  }

  addOrdi() {
    this.ordiservice.add(this.ordiForm).subscribe(data =>{
    this.router.navigate(['/home']);
    console.log(this.ordiForm);
    });
  
  }
}
