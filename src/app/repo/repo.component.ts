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
  fetchedrepos!: string;
  repository = false;

  constructor(private myRepos:SearchService) { }

  ngOnInit(): void {


  }
  @ViewChild('formInputs') searchRepoForm!: NgForm;

  Rep() {
    this.fetchedrepos = this.searchRepoForm.value.search;
    
    this.myRepos.findRepos(this.fetchedrepos).then((response:any) => {
        this.fetchrepos = this.myRepos.searchrepositories;
        this.repository = true;
      }
    );

    }

}
