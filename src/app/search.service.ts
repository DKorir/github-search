import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
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
  personalTockens = environment.apiKey;
  searchrepositories: any;

  constructor(private http:HttpClient) {
    // this.users = new User('','','',0,'', new Date(), 0, 0);
  }



  user(){
    return this.http.get('https://api.github.com/users/' + this.githubusername + '?client_id' +'client_secret=' +this.personalTockens).pipe(
      map((results: any)=>{
        return results;
      })
    );
  }
  //repos
  fetchRepos(){
    return this.http.get('https://api.github.com/users/' +this.githubusername +'/repos?client_id=' +'&client_secret' +this.personalTockens).pipe(map((repoResults:any)=>{
      return repoResults;
    })
    );
  }
 // after
  Updates(username:string){
    this.username = username;
  }
  updateUser(){
    return this.http.get("https://api.github.com/users/" + this.username +"?client_id=" +"&client_secret" +this.personalTockens)
  }




  findRepos(rname: any) {
    let mise = new Promise<void>((resolve,) => {
      this.http.get('https://api.github.com/users/' +rname +'/repos?client_id=' +this.personalTockens)
        .toPromise().then((response:any) => {
            this.searchrepositories= response;
            resolve();
          }
        );
    });
    return mise;
  }
}
