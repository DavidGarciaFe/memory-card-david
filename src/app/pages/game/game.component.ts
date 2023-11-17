import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  constructor(private gameService:GameService, private route: ActivatedRoute) { }
  user: any;
  array: number[] = [];
  randomNumber:number = 0;
  selectedDifficulty: any;
  startPlay = false;
  gameMessage = "Click start button to start to play";

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {this.user = params["user"]});
    this.user = JSON.parse(JSON.parse(this.user));
    this.array = this.gameService.createRandomArray();
    this.randomNumber = this.gameService.generateRandomWinner();
    this.selectedDifficulty = "medium";
  }
  
  startGame(){
    this.gameMessage = "Memorize the cards"
    this.array = this.gameService.createRandomArray();
    this.randomNumber = this.gameService.generateRandomWinner();
    this.startPlay = true;
    setTimeout(()=>{                         
      this.gameMessage = `Where is the number ${this.randomNumber}`;
  }, this.gameService.startGame(this.selectedDifficulty));
  }
}
