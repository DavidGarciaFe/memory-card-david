import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  shuffle(array:number[]) {
    var i = array.length,
    j = 0,
    temp;

    while (i--) {
    j = Math.floor(Math.random() * (i+1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }

  return array;
  }

  createRandomArray(): any{
    const array = [1,2,3,4,5,6,7,8,9];
    let randomizedArray = this.shuffle(array)
  
    return randomizedArray;
  }
  generateRandomWinner(){

    return Math.floor(1 + Math.random() * 9);
  }

  startGame(selectedDifficulty:string){
    let time = 0;
    if(selectedDifficulty = 'easy'){
      time = 10000;
    }else if(selectedDifficulty = 'medium'){
      time = 5000;
    }else{
      time = 200;
    }
    return time;
  }
}
