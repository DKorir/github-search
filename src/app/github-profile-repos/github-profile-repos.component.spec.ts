import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileReposComponent } from './github-profile-repos.component';

describe('GithubProfileReposComponent', () => {
  let component: GithubProfileReposComponent;
  let fixture: ComponentFixture<GithubProfileReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfileReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
