export default function RsvpFields({ user, index }) {
  const suffix = `--${index}`;

  return (<>
    <input name={`id${suffix}`} type="hidden" value={user.id} />
    <input name={`Name${suffix}`} type="text" placeholder="Name" defaultValue={user.name} spellCheck={false} />
    <input name={`Email${suffix}`} type="text" placeholder="Email" defaultValue={user.email} spellCheck={false} />
    <input name={`Address${suffix}`} type="text" placeholder="Address" defaultValue={user.address} spellCheck={false} />
    <input name={`RSVP${suffix}`} type="checkbox" defaultChecked={user.rsvp} />
    <label for={`RSVP${suffix}`}>RSVP?</label>
  </>);
};
