import TextField from '@components/TextField'

import styles from '../styles/RsvpFields.module.css'

export default function RsvpFields({ user, index }) {
  const suffix = `--${index}`;

  return (
    <fieldset className={styles.fieldset}>
      <input name={`id${suffix}`} type="hidden" value={user.id} />
      <TextField name={`Name${suffix}`} label="Name" defaultValue={user.name} hideLabel hero />
      <TextField name={`Email${suffix}`} label="Email" defaultValue={user.email} />
      <TextField name={`Address${suffix}`} label="Address" defaultValue={user.address} />

      <br /><br />
      <label htmlFor={`RSVP${suffix}`}>Will you be joining us?</label>
      <input name={`RSVP${suffix}`} type="checkbox" defaultChecked={user.rsvp} />
    </fieldset>
  );
};
