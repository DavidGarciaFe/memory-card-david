import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  seeIfUserExist(name:string){
    let existentUser:any = localStorage.getItem(name);
    if(existentUser == null){
      existentUser = this.createNewUser(name);
    }
    return existentUser;
  }

  createNewUser(name:string){
    const user = {user:name, score:0}
    localStorage.setItem(name, JSON.stringify(user));
    return user;
  }
  addScoreToUser(name:string, difficulty:string){
    let user = JSON.parse(this.seeIfUserExist(name));
    let score;

    if(difficulty == "easy"){
      score = 10;
    }else if(difficulty == "medium"){
      score = 20;
    }else{
      score = 30;
    }

    user.score = user.score + score;
    localStorage.setItem(name, JSON.stringify(user));
  }
}
