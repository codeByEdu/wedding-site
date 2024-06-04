// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51PNko5Ju8JtNTZAx2oYFosoZxWxTZP2jjE5JaOBKaKwM8gtU7KSfm8NGfzEFl9i7JFkqAmY3lUA0PHFNiHcLwzVY00OzD5EQAk');

//ajuste o cors para liberar o acesso a sua aplicação para todos os domínios
const cors = require('cors');
app.use(cors({ origin: '*' }));



app.post('/api/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: '1 parcela da lua de mel',
                        images: ['assets/presente-viagem.jpeg'],
                    },
                    unit_amount: 58300, // Preço em centavos
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Liquidificador',
                        images: ['assets/super-liquidificador.webp'],
                    },
                    unit_amount: 15000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: '1 ano de suplementos da Growth',
                        images: ['https://www.gsuplementos.com.br/upload/produto/layout/1684/dose-whey-protein-concentrado-30gr-v4.webp'],
                    },
                    unit_amount: 89300,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Par de ingressos para o jogo do timão',
                        images: ['https://static.corinthians.com.br/uploads/1572533010c81e155d85dae5430a8cee6f2242e82c.jpg'],
                    },
                    unit_amount: 20000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Kit churrasco',
                        images: ['https://m.media-amazon.com/images/I/61tzBVEFuUL._AC_UF894,1000_QL80_.jpg'],
                    },
                    unit_amount: 12000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Caixa de ferramentas completa',
                        images: ['https://images.cws.digital/produtos/gg/35/61/caixa-de-ferramentas-manuais-com-66-pecas-7606135-1677879022771.jpg'],
                    },
                    unit_amount: 10000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Pantufa limpa chão',
                        images: ['assets/pantufa.jpeg'],
                    },
                    unit_amount: 5000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Alguns kits TPM',
                        images: ['https://live.staticflickr.com/7035/6819106309_ab38246592_b.jpg'],
                    },
                    unit_amount: 8000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Ta duro dorme',
                        images: ['https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_v2/main_image/76862b04ff26206cb2a710a3fa694c30.webp'],
                    },
                    unit_amount: 100,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Cafeteira',
                        images: ['https://m.media-amazon.com/images/I/71APp0IvbLL._AC_UF894,1000_QL80_.jpg'],
                    },
                    unit_amount: 15000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: '1 parcela dessa geladeira top rs',
                        images: ['https://samsungbrshop.vtexassets.com/arquivos/ids/225500-800-auto?v=638368602775270000&width=800&height=auto&aspect=true'],
                    },
                    unit_amount: 100000,
                },
                quantity: 1,
            }
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });

    res.json({ id: session.id });
});


app.listen(4242, () => console.log(`Listening on port ${4242}!`));