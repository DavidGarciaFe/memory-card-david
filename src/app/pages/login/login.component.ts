import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Navigation, Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nameControl: FormControl = new FormControl('', {
    validators : [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
  });
  errorMessage:string = "Need to add a name";

  constructor(private loginService: UserService,private router: Router, private route: ActivatedRoute) { }
  user:any;

  ngOnInit(): void {
  }

  login(){
   this.user =  this.loginService.seeIfUserExist(this.nameControl.value);
   this.router.navigate([`../game`, JSON.stringify(this.user)], { relativeTo: this.route });
  }

}
