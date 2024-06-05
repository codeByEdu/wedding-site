import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lista-presentes',
    templateUrl: './lista-presentes.component.html',
    styleUrls: ['./lista-presentes.component.scss']
})


export class ListaPresentesComponent implements OnInit {
    baseUrl = 'https://api-stripe-five.vercel.app/';
    constructor(
        private http: HttpClient,
    ) { }
    objeto: any;
    presentes: any;
    ngOnInit(): void {
        const response = this.http.get(this.baseUrl + '/api/list-products')
        this.objeto = response;
        this.objeto.subscribe((res: any) => {
            this.presentes = res.data;
            this.presentes.forEach((presente: any) => {
                presente.metadata.moeda = presente.metadata.moeda.replace(/'/g, "");
            })
        })
    }


}
