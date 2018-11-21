import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
  selector: 'DodajPevacaComponent',
  templateUrl: './dodajpevaca.html',
  styleUrls: ['../../css/style1.css']
})
export class DodajPevacaComponent {
  http: Http;
  router: Router;
  postResponse: Response;
  addPevacForm = new FormGroup({
    ime: new FormControl(),
    brojAlbuma: new FormControl(),
    brojSpotova: new FormControl()
});
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;

  }
onAddPevac(): void {
  var data = "ime=" + this.addPevacForm.value.ime + "&& brojAlbuma=" + this.addPevacForm.value.brojAlbuma + "&& brojSpotova=" + this.addPevacForm.value.brojSpotova;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost/php/dodajpevac.php', data, { headers: headers }).map(res => res).subscribe( data => this.postResponse = data, err => alert(JSON.stringify(err)),
  () => {
    if(this.postResponse["_body"].indexOf("error") === -1){
      this.router.navigate(['./obrisipevaca']);
    }else{
      alert("Neuspešno dodavanje pevača.");
    }
  }
);
}
}
