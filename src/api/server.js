// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//ajuste o cors para liberar o acesso a sua aplicação para todos os domínios
const cors = require('cors');
app.use(cors({ origin: '*' }));
const bodyParser = require('body-parser')
app.use(bodyParser.json())



app.post('/api/create-checkout-session', async (req, res) => {
    console.log(req.body.itens)
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [req.body.itens],
        mode: 'payment',
        success_url: req.body.success_url,
        cancel_url: req.body.cancel_url,

    });

    res.json({ id: session.id });
});

app.get('/api/list-products', async (req, res) => {
    const products = await stripe.products.list({ limit: 50 });
    res.json(products);
});





app.listen(4242, () => console.log(`Listening on port ${4242}!`));