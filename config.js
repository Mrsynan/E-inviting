// ====== RSVP SETTINGS (no Firebase needed) ======
// Option A (recommended): save RSVPs into your own Google Sheet.
//   Follow README step "RSVP in a Google Sheet", then paste the Web app URL here.
// Option B: guests' RSVP opens a WhatsApp message to your number
//   (digits only with country code, e.g. "85512345678").
// If both are empty, the form works in preview mode only (nothing is saved).
export const RSVP = {
  endpoint: "https://script.google.com/macros/s/AKfycbz6fRHsh4evVxO8E4iLUM8hOkGVdxhLin0KXhqxHoZBxa9vOFBx1YP_2ng3hu7M9rCx/exec",
  whatsapp: "",
};
