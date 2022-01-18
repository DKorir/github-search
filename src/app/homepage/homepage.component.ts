import { Component, OnInit } from '@angular/core';
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
  constructor(private myService:SearchService) { }

  ngOnInit(): void {
    this.myService.user().subscribe((gitResults:any)=>{
      this.userResults=gitResults
      console.log("Results",gitResults)
    })
  }

}
