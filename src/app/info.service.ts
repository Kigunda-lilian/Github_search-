import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { RepoClass } from './repo-class';
import { UserClass } from './user-class';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  users!:UserClass


  constructor() { }



  getUser(){
    interface Apiresponce{
      login:string,
        name:string,
        avatar_url:string,
        bio:string,
       _repos:string,
        followers:string,
        following:string,
         created_at:Date,
    }
  }
}
