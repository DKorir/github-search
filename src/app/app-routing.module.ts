import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubAppComponent } from './github-app/github-app.component';
import { GithubProfileDataComponent } from './github-profile-data/github-profile-data.component';
import { GithubProfileReposComponent } from './github-profile-repos/github-profile-repos.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

const routes: Routes = [
  {path:'home', component:GithubAppComponent},
  {path:'user', component:GithubProfileComponent},
  {path:'repos', component:GithubProfileReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
