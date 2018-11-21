import { Component,Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

@Component({
  selector: 'DodajProducentaComponent',
  templateUrl: './dodajproducenta.html',
  styleUrls: ['../../css/style1.css']
})

export class DodajProducentaComponent{
  http: Http;
  router: Router;
  postResponse: Response;
  addProducentForm = new FormGroup({
    ime: new FormControl(),
    prezime: new FormControl(),
    brojPesama: new FormControl(),
  });
    constructor(http: Http, router: Router) {
      this.http = http;
      this.router = router;

    }
    onAddProducent(): void {
      var data = "ime=" + this.addProducentForm.value.ime + "&& prezime=" + this.addProducentForm.value.prezime + "&& brojPesama=" + this.addProducentForm.value.brojPesama;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post('http://localhost/php/dodajproducenta.php', data, { headers: headers }).map(res => res).subscribe( data => this.postResponse = data, err => alert(JSON.stringify(err)),
      () => {
        if(this.postResponse["_body"].indexOf("error") === -1){
          this.router.navigate(['./obrisiproducenta']);
        }else{
          alert("Neuspešno dodavanje producenta.");
        }
      }
    );
    }
    }
