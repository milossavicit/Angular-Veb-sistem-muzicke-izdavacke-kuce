import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'LoginPage',
  templateUrl: './login.html',
  styleUrls: ['../../css/style1.css'],
})

export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    checkbox: new FormControl()
  });
  http: Http;
  router: Router;

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
    if(localStorage.getItem('token') != null){
      this.router.navigate(['./']);
    }
  }
  onLogin(): void {
    let data = "username=" + this.loginForm.value.username + "&&password=" + this.loginForm.value.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
if(this.loginForm.value.checkbox !== true){
    this.http.post('http://localhost/php/loginservice.php', data, {headers:headers})
    .map(res => res)
    .subscribe(
      data => {
        let obj = JSON.parse(data["_body"]);
        localStorage.setItem('token', obj.token);
        this.router.navigate(['./']);
      },
      err => {
        let obj = JSON.parse(err._body);
        let element = <HTMLElement>document.getElementsByClassName("alert")[0];
        element.style.display = "block";
        element.innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
      }
    );
  }
  else
  {
  this.http.post('http://localhost/php/loginadmin.php', data, {headers:headers})
  .map(res => res)
  .subscribe(
    data => {
      let obj = JSON.parse(data["_body"]);
      localStorage.setItem('tokenadmin', obj.tokenadmin);
      this.router.navigate(['./']);
    },
    err => {
      let obj = JSON.parse(err._body);
      let element = <HTMLElement>document.getElementsByClassName("alert")[0];
      element.style.display = "block";
      element.innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
    }
  );
}
}
}
