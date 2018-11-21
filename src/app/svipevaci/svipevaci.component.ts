import { Component,Directive } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'SviPevaciComponent',
  templateUrl: './svipevaci.html',
  styleUrls: ['../../css/style1.css']
})

export class SviPevaciComponent{
  private korisnici = 'http://localhost/php/getpevaclist.php';
  data: Object[];
  name: String = "";
    constructor (private http: Http){
      this.http.get(this.korisnici).subscribe(
        data => {
          this.data = JSON.parse(data["_body"]);
        },
        err => console.log(err.text()),
          () => {
          }
        );
      }
}
