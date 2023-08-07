var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default async (req, res) => {
  const record = await base('Guests').find(req.query.id);

  if (!record) {
    res.status(404).send('Not Found');
    return;
  }

  let obj = {
    id: record.id,
    name: record.fields['Name'],
    email: record.fields['Email'],
    address: record.fields['Address'],
    rsvp: record.fields['RSVP'],
    party: [],
    dietary: record.fields['Dietary Restrictions'],
    shuttle: record.fields['Needs Shuttle'],
    pickup: record.fields['Pickup Location'],
  };

  const recordIds = record.fields['Party'];

  if (recordIds) {
    const filterString = `OR(${recordIds.map(id => `RECORD_ID()='${id}'`).join(",")})`;
    const partyMembers = await base('Guests').select({
      view: 'API View',
      filterByFormula: filterString
    }).firstPage();

    partyMembers.forEach(pm => {
      obj.party.push({
        id: pm.id,
        name: pm.fields['Name'],
        email: pm.fields['Email'],
        address: pm.fields['Address'],
        rsvp: pm.fields['RSVP'],
        dietary: pm.fields['Dietary Restrictions'],
        shuttle: pm.fields['Needs Shuttle'],
        pickup: pm.fields['Pickup Location'],
      });
    });
  }

  res.status(200).json(obj);
}
