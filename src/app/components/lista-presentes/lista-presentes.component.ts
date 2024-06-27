import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lista-presentes',
    templateUrl: './lista-presentes.component.html',
    styleUrls: ['./lista-presentes.component.scss']
})


export class ListaPresentesComponent implements OnInit {
    baseUrl = 'https://eoeslxtzxj.execute-api.us-east-1.amazonaws.com/list-products-stripe';
    constructor(
        private http: HttpClient,
    ) { }
    objeto: any;
    presentes: any;
    ngOnInit(): void {
        const response = this.http.get(this.baseUrl)
        this.objeto = response;
        this.objeto.subscribe((res: any) => {
            this.presentes = res.data;
            console.log(this.presentes);
            this.presentes.forEach((presente: any) => {
                presente.metadata.moeda = presente.metadata.moeda.replace("'", "");
                presente.metadata.moeda = presente.metadata.moeda.replace("'", "");
            })
        })
    }


}
