MPesa STK Push server (Daraja)

This small Express server provides:

- POST /api/mpesa/stkpush - start an STK Push (Lipa Na M-Pesa)
- POST /api/mpesa/callback - Safaricom will POST payment results here

Setup

1. Copy `.env.example` to `.env` and fill in values:

   MPESA_CONSUMER_KEY=
   MPESA_CONSUMER_SECRET=
   MPESA_SHORTCODE=3106430
   MPESA_PASSKEY=
   CALLBACK_URL=https://<your-public>/api/mpesa/callback
   MPESA_ENV=sandbox

2. Install dependencies and run server:

   cd server
   npm install
   npm run dev

3. Use `ngrok` to expose the server in development so Safaricom can reach the callback URL:

   ngrok http 3001

4. Update `CALLBACK_URL` in your `.env` with the ngrok URL + `/api/mpesa/callback` and restart the server.

Frontend

POST to `/api/mpesa/stkpush` with JSON:

  { "phone": "2547XXXXXXXX", "amount": 100, "accountRef": "Order123", "description": "Order" }

The server will call Safaricom and return the STK Push response.

Security

- Store credentials in `.env` and never commit secrets.
- Verify and persist callback payloads in production.
- Use HTTPS for public endpoints.
