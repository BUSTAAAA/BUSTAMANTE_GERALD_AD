import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private api: HttpClient) {}

  ngOnInit(): void {}
  // title = 'portal';
  // userCredential1: string = 'null';
  // userCredential2: string = 'null';

  // testing if login works
  // users: Array<any> = [
  //   { username: 'potato', password: 'eyes' },
  //   { username: 'potato1', password: 'eyes1' },
  //   { username: 'potato2', password: 'eyes2' },
  //   { username: 'potato3', password: 'eyes3' },
  //   { username: 'potato4', password: 'eyes4' },
  //   { username: 'potato5', password: 'eyes5' },
  //   { username: 'potato6', password: 'eyes6' },
  // ];

  fCEmail = new FormControl();
  fCPassword = new FormControl();
requestResult ='';

 async login() {
   var result: any =await this.api
   .post(environment.API_URL + '/user/login', {
    email: this.fCEmail.value,
    password: this.fCPassword.value,
  })
  .toPromise();
if(result.success){
  this.nav('home');
}
    // testing if login works
    // this.userCredential1 = email;
    // this.userCredential2 = password;
    // if (
    //   this.fCEmail.value == '76gerald.gb@gmail.com' &&
    //   this.fCPassword.value == '12345678'
    // ) {
    //   this.nav('home');
    // } else {
    //   alert('Incorrect credentials');
    //   console.log('nagkamali ka tangina');
    // }
  }
  nav(destination: string) {
    this.router.navigate([destination]);
  }
}
