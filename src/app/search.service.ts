import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  githubusername:string="DKorir"

  constructor(private http:HttpClient) {}
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
}
