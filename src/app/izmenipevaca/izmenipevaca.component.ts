import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'IzmeniPevacaComponent',
  templateUrl: `./izmenipevaca.html`,
  styleUrls: ['../../css/style1.css']
})

export class IzmeniPevacaComponent  {

  http: Http;
  router: Router;
  postResponse: Response;
  route: ActivatedRoute;
  data: Object[];
  private ime = '';
  private brojAlbuma = '';
  private brojSpotova = '';

  constructor(route: ActivatedRoute, http: Http, router: Router) {
    this.http = http;
    this.router = router;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.get('http://localhost/php/izmenapevaca.php?id='+id,{headers:headers}).map(res => res.json()).share()
        .subscribe(data => {
            this.data = data.data;
            this.ime =  data.data.ime;
            this.brojAlbuma = data.data.brojAlbuma;
            this.brojSpotova = data.data.brojSpotova;

          },
          err => {
            this.router.navigate(['']);
          }
        );
    });
  }

    onEdit(): void {
  	  this.route.params.subscribe((params: Params) => {
	      let id = params['id'];
	      let headers = new Headers();
	      var data = "id=" + id + "&ime=" + this.ime + "&brojAlbuma=" + this.brojAlbuma + "&brojSpotova=" + this.brojSpotova;
	      headers.append('Content-Type', 'application/x-www-form-urlencoded');
	      this.http.post('http://localhost/php/izmenipevaca.php', data, { headers: headers })
	      .map(res => res)
	      .subscribe( data => this.postResponse = data,
	        err => alert(JSON.stringify(err)),() => {
	          if(this.postResponse["_body"].indexOf("error") === -1){
	            this.router.navigate(['./obrisipevaca']);
	          }else{
	            alert("Niste izmenili podatke.");
	          }
	        }
	      );
	  	}
	  	);
	}


  public update() {

  }

}
