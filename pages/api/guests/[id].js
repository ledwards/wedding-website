var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default async (req, res) => {
  const record = await base('Guests').find(req.query.id);

  if (!record) {
    res.status(404).send('Not Found');
  }

  let obj = {
    id: record.id,
    name: record.fields['Name'],
    email: record.fields['Email'],
    address: record.fields['Address'],
    party: []
  };

  const recordIds = record.fields['Party'];

  if (recordIds) {
    const filterString = `OR(${recordIds.map(id => `RECORD_ID()='${id}'`).join(",")})`;
    // const filterString = '';
    const partyMembers = await base('Guests').select({
      view: 'Main View',
      filterByFormula: filterString
    }).firstPage();

    partyMembers.forEach(r => {
      obj.party.push({
        id: r.id,
        name: r.fields['Name'],
        email: r.fields['Email'],
        address: r.fields['Address'],
        rsvp: r.fields['RSVP']
      });
    });
  }

  res.status(200).json(obj);
}
