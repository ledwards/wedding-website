var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default async (req, res) => {
  const data = req.query;
  const records = [];

  for (const [k, val] of Object.entries(data)) {
    const [key, index] = k.split("--");

    if (typeof (records[index]) === 'undefined') {
      records[index] = {};
      records[index]['fields'] = {};
    }

    if (key == 'id') {
      records[index]['id'] = val;
    } else {
      records[index]['fields'][key] = val;
    }
  }

  await base('Guests').update(records);

  res.redirect(307, `/${data.redirect}/${records[0].id}`);
}
