import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public myGitName = 'DKorir';
  public githubUser!:string;
  public users!:any;
  user:any;
  username:string = 'DKorir'

  constructor(private myService:SearchService) { }


  searchUser(){
    this.myService.Updates(this.username);
    this.myService.updateUser().subscribe((user:any)=>{
      console.log(user);
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

}
