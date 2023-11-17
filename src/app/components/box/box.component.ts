import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, OnChanges {
  @Input() user: string = "";
  @Input() number: any;
  @Input() winnerNumber: any;
  @Input() startGame: boolean = false;
  @Input() difficulty: string = "medium";
  numberBox:any = 0;
  boxColor:string = "";
  
  
  constructor(private gameService:GameService, private userService:UserService) { }

  ngOnInit(): void {
    this.numberBox = this.number;
  }

  ngOnChanges(): void {
    if(this.startGame){
      this.numberBox = this.number;
      this.boxColor = "blankBox";
      setTimeout(()=>{                           
      this.numberBox = "?"
    }, this.gameService.startGame(this.difficulty));
    }
  }

  seeIfTheBoxClickedIsWinnner(numberClicked:number){
    if(numberClicked == this.winnerNumber){
       this.boxColor = "winnerBox";
       this.userService.addScoreToUser(this.user,this.difficulty);
    } else{
      this.boxColor = "loosesBox";
    }
    
  }
}
