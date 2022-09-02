var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default function handler(req, res) {
  const query = req.query;
  let users = [];

  base('Guests').select({
    view: "Main View"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      const fields = record.fields;
      users = users.concat({
        id: record.id,
        name: fields['Name'],
        email: fields['Email'],
        address: fields['Address'],
        rsvp: r.fields['RSVP'],
        party: fields['Party']
      });
    });
    fetchNextPage();

  }, function done(err) {
    const user = users.find(u => (u.name && query.name && u.name.toLowerCase() == query.name.toLowerCase()) ||
      (u.email && query.email && u.email.toLowerCase() == query.email.toLowerCase())
    );

    if (!user) {
      res.status(404).json({});
      return;
    }

    if (err) {
      console.error(err);
      res.status(500);
      return;
    } else {
      res.redirect(307, `/rsvp/edit/${user.id}`);
    }
  })
}
