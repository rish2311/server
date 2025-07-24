const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

// Add debugging logs
console.log("PayPal Configuration:");
console.log("PAYPAL_MODE:", process.env.PAYPAL_MODE);
console.log("CLIENT_ID exists:", !!process.env.PAYPAL_CLIENT_ID);
console.log("CLIENT_SECRET exists:", !!process.env.PAYPAL_CLIENT_SECRET);

module.exports = paypal;
