import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users!: User;
  username!: string;

  githubusername:string="DKorir"
  searchrepositories: any;

  constructor(private http:HttpClient) {
    // this.users = new User('','','',0,'', new Date(), 0, 0);
  }



  user(){
    return this.http.get('https://api.github.com/users/' + this.githubusername + '?client_id' +'client_secret=' +environment.gitApi).pipe(
      map((results: any)=>{
        return results;
      })
    );
  }
  //repos
  fetchRepos(){
    return this.http.get('https://api.github.com/users/' +this.githubusername +'/repos?client_id=' +'&client_secret' +environment.gitApi).pipe(map((repoResults:any)=>{
      return repoResults;
    })
    );
  }
 // after
  UpdateUser(username:string){
    this.username = username;
  }
  getUser(){
    return this.http.get("https://api.github.com/users/" + this.username +"?client_id=" +"&client_secret")
  }




  findRepos(rname: any) {
    let mise = new Promise<void>((resolve,) => {
      this.http.get('https://api.github.com/users/' +
      rname +'/repos?client_id='
       +environment.gitApi
        )
        .toPromise().then((response:any) => {
            this.searchrepositories= response;
            resolve();
          }
        );
    });
    return mise;
  }
}
