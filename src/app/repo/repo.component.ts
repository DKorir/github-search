import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  fetchrepos!:any;
  fetched!: string;
  repository = false;

  constructor(private myService:SearchService) { }

  ngOnInit(): void {


  }
  @ViewChild('formInputs') searchRepoForm!: NgForm;

  Rep() {
    this.fetched = this.searchRepoForm.value.search;
    
    this.myService.findSearchRep(this.fetched).then((response:any) => {
        this.fetchrepos = this.myService.searchrepositories;
        this.repository = true;
      }
    );

    }

}
