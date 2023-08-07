var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default function handler(req, res) {
  const query = req.query;
  let users = [];

  base('Guests').select({ view: 'API View' }).all().then(records => {
    users = records.map((record) => {
      return {
        id: record.id,
        name: record.fields['Name'],
        email: record.fields['Email'],
        address: record.fields['Address'],
        rsvp: record.fields['RSVP'],
        party: record.fields['Party'],
        dietary: record.fields['Dietary Restrictions'],
        shuttle: record.fields['Needs Shuttle'],
        pickup: record.fields['Pickup Location'],
      }
    });

    const user = users.find(u => (u.name && query.name && u.name.toLowerCase() == query.name.toLowerCase()) ||
      (u.email && query.email && u.email.toLowerCase() == query.email.toLowerCase())
    );

    if (user) {
      res.redirect(307, `/${query.redirect}/edit/${user.id}`);
      return;
    } else {
      res.redirect(307, `/${query.redirect}?error=${encodeURIComponent("Couldn't find your invitation.")}`);
      return;
    }
  }).catch(err => {
    console.error(err);
    res.status(500).send(err);
    return;
  });
}
