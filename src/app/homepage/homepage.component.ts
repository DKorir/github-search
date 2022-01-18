import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { SearchService } from '../search.service';
import { User } from '../user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userResults!:User;
  repositoryResults:any;
  constructor(private myService:SearchService) { }

  ngOnInit(): void {
    //profile
    this.myService.user().subscribe((gitResults:any)=>{
      this.userResults=gitResults
      console.log("Results",gitResults)
    })
    //repos
    this.myService.fetchRepos().subscribe((repositoryResults:any)=>{
      this.repositoryResults=repositoryResults
    })
  }

}
