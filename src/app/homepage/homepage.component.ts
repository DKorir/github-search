import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private myService:SearchService) { }

  ngOnInit(): void {
    this.myService.user().subscribe((gitResults:any)=>{
      console.log("Results",gitResults)
    })
  }

}
