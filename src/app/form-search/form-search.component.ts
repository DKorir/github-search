import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'stream';
import { GithubSearch } from '../github-search';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchInfo = new GithubSearch ('');
  @output() getName =new EventEmitter<GithubSearch>();

  searchName(inputs:any){
    this.getName.emit(inputs.value.findGithubUser);
    console.log(inputs.value.find)
    inputs.reset();
  }

}


