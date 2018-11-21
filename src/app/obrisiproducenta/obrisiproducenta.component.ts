import { Component, Directive } from '@angular/core';
import { Http,  Headers, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ObrisiProducentaComponent',
  templateUrl: './obrisiproducenta.html',
  styleUrls: ['../../css/style3.css']
})
export class ObrisiProducentaComponent {
    router: Router;
    currentUrl : String;

    private producent = 'http://localhost/php/getproducent.php';
    data: Object[];
    name: String = "";


    constructor (private http: Http, router: Router){
        this.router = router;
        this.currentUrl = '';
        this.http.get(this.producent).subscribe(
            data => {
                this.data =  JSON.parse(data["_body"]);
            },
            err => console.log(err.text()),
                () => {
                }
        );
    }
    public izbrisiProducenta(event: Event, item: Number) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get('http://localhost/php/obrisiproducenta.php?id='+ item, { headers: headers }).subscribe( data => {
        event.srcElement.parentElement.parentElement.remove();
        });
    }

   public izmeniProducenta(id:number){
     this.router.navigateByUrl('izmeniproducenta/' +id);
   }

}
