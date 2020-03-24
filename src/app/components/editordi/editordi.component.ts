import { Component, OnInit } from '@angular/core';
import { Ordi } from 'src/app/models/ordi';
import { OrdiService } from 'src/app/services/ordi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editordi',
  templateUrl: './editordi.component.html',
  styleUrls: ['./editordi.component.css']
})
export class EditordiComponent implements OnInit {
ordiForm: Ordi;
isLoading: boolean;
marqueDispo: string[];
  typeDispo: string[];
  categorieDispo: string[];
  constructor(private ordiservice: OrdiService, 
              private router: Router, 
              private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.marqueDispo = this.ordiservice.marqueDispo;
    this.typeDispo = this.ordiservice.typeDispo;
    this.categorieDispo = this.ordiservice.categorieDispo;
    this.ordiservice.getOneById(+this.activatedroute.snapshot.paramMap.get('id')).subscribe(data => {
      this.ordiForm = data;
      this.isLoading = false;
    });
  }

  editOrdi() {
    this.ordiservice.editOrdi(this.ordiForm).subscribe((data) =>{
      this.router.navigate(['/home']);
    });
  }

}
