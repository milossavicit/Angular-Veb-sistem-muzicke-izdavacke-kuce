import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['../css/style.css'],
})
export class AppComponent {
    router: Router;
    isAuth: String;
    isAuthAdmin: String;
    currentUrl : String;

    constructor(router: Router) {
      this.router = router;
      this.currentUrl = '';
    }

    ngOnInit() {
      this.router.events.subscribe(event => {
      if(localStorage.getItem('tokenadmin') !== null) {
          this.isAuthAdmin = "yes";
          }if(localStorage.getItem('tokenadmin') == null) {
              this.isAuthAdmin = "no";
              }if(localStorage.getItem('token') !== null) {
                   this.isAuth = "yes";
                  }if(localStorage.getItem('token') == null) {
                      this.isAuth = "no";
                      }
      });
    }


    onLogout(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenadmin");
        this.router.navigate(['./']);

        if(localStorage.getItem('token') !== null){
          this.isAuth = "yes";
        }else{
          this.isAuth = "no";
        }
        if(localStorage.getItem('tokenadmin') !== null){
          this.isAuthAdmin = "yes";
        }else{
          this.isAuthAdmin = "no";
        }
    }
}
