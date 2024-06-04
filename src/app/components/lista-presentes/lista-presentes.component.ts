import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-presentes',
  templateUrl: './lista-presentes.component.html',
  styleUrls: ['./lista-presentes.component.scss']
})


export class ListaPresentesComponent {

  presentes = [{
    nome: '1 parcela da lua de mel',
    imagem: 'assets/presente-viagem.jpeg',
    preco: 583.00
},
{
    nome: 'Liquidificador',
    imagem: 'assets/super-liquidificador.webp',
    preco: 150.00
},
{
    nome: '1 ano de suplementos da Growth',
    imagem: 'https://www.gsuplementos.com.br/upload/produto/layout/1684/dose-whey-protein-concentrado-30gr-v4.webp',
    preco: 893.00
},
{
    nome: 'Par de ingressos para o jogo do timão',
    imagem: 'https://static.corinthians.com.br/uploads/1572533010c81e155d85dae5430a8cee6f2242e82c.jpg',
    preco: 200.00
},
{
    nome: 'Kit churrasco',
    imagem: 'https://m.media-amazon.com/images/I/61tzBVEFuUL._AC_UF894,1000_QL80_.jpg',
    preco: 120.00
},
{
    nome: 'Caixa de ferramentas completa',
    imagem: 'https://images.cws.digital/produtos/gg/35/61/caixa-de-ferramentas-manuais-com-66-pecas-7606135-1677879022771.jpg',
    preco: 100.00,
    descricao: ' '
},
{
    nome: 'Pantufa limpa chão',
    imagem: 'assets/pantufa.jpeg',
    preco: 50.00
},
{
    nome: 'Alguns kits TPM',
    imagem: 'https://live.staticflickr.com/7035/6819106309_ab38246592_b.jpg',
    preco: 80.00
},
{
    nome: 'Ta duro dorme',
    imagem: 'https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_v2/main_image/76862b04ff26206cb2a710a3fa694c30.webp',
    preco: 1.00
},
{
    nome: 'Cafeteira',
    imagem: 'https://m.media-amazon.com/images/I/71APp0IvbLL._AC_UF894,1000_QL80_.jpg',
    preco: 150.00
},
{
    nome: '1 parcela dessa geladeira top rs',
    imagem: 'https://samsungbrshop.vtexassets.com/arquivos/ids/225500-800-auto?v=638368602775270000&width=800&height=auto&aspect=true',
    preco: 1000.00
}
];

}
