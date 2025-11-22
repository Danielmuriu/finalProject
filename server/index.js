/*
  Minimal MPesa STK Push server (Daraja)
  - Uses environment variables (see .env.example)
  - Provides /api/mpesa/stkpush and /api/mpesa/callback
  - Meant for development with sandbox credentials; do not commit real secrets
*/

import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const MPESA_ENV = (process.env.MPESA_ENV || 'sandbox').toLowerCase();
const OAUTH_URL = MPESA_ENV === 'production'
  ? 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
  : 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

const STK_URL = MPESA_ENV === 'production'
  ? 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
  : 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

async function getToken() {
  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_CONSUMER_SECRET;
  if (!key || !secret) throw new Error('MPESA_CONSUMER_KEY and MPESA_CONSUMER_SECRET must be set');

  const resp = await axios.get(OAUTH_URL, {
    auth: { username: key, password: secret }
  });
  return resp.data.access_token;
}

function makeTimestamp() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  return `${yyyy}${mm}${dd}${hh}${min}${ss}`;
}

app.post('/api/mpesa/stkpush', async (req, res) => {
  try {
    const { phone, amount = 1, accountRef = 'GiftsParadise', description = 'Order' } = req.body;
    if (!phone) return res.status(400).json({ error: 'phone is required (e.g. 2547XXXXXXXX)' });

    const token = await getToken();
    const timestamp = makeTimestamp();
    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    if (!shortcode || !passkey) return res.status(500).json({ error: 'MPESA_SHORTCODE and MPESA_PASSKEY must be set in env' });

    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

    const payload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone, // e.g. 2547xxxxxxxx
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: process.env.CALLBACK_URL,
      AccountReference: accountRef,
      TransactionDesc: description
    };

    const resp = await axios.post(STK_URL, payload, { headers: { Authorization: `Bearer ${token}` } });
    return res.json(resp.data);
  } catch (err) {
    console.error('STK Push error', err.response?.data || err.message);
    return res.status(500).json({ error: 'STK Push failed', detail: err.response?.data || err.message });
  }
});

// Callback endpoint - Safaricom will POST here. Persist/verify in production.
app.post('/api/mpesa/callback', (req, res) => {
  console.log('MPESA CALLBACK RECEIVED', JSON.stringify(req.body).slice(0, 2000));
  // TODO: Persist order status and verify payload
  res.json({ ResultCode: 0, ResultDesc: 'Accepted' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`MPesa server listening on ${port} (env=${MPESA_ENV})`));
