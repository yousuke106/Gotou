import Stripe from 'stripe'

export default async function handler(req, res) {
    if (req.method.toLocaleLowerCase() !== 'get') {
        return res.status(405).end()
    }
    const stripe = new Stripe(process.env.STRIPE_API_KEY, {
       apiVersion: '2020-08-27', // StripeのAPIバージョンを指定
       maxNetworkRetries: 3 // ネットワークエラーでStripe API呼び出しが失敗した時のリトライ回数を指定
   })
   const products = await stripe.products.list();
   res.status(200).json(products);
}
