import TextField from '@components/TextField'

import styles from '../styles/RsvpFields.module.css'

export default function RsvpFields({ user, index }) {
  const suffix = `--${index}`;

  return (
    <fieldset className={styles.fieldset}>
      <input name={`id${suffix}`} type="hidden" value={user.id} />
      <h3>{user.name}</h3>
      <TextField name={`Email${suffix}`} label="Email" defaultValue={user.email} />
      <TextField name={`Address${suffix}`} label="Address" defaultValue={user.address} />

      <br /><br />
      <label htmlFor={`RSVP${suffix}`} className={styles.radioButtonSet}>Will you be joining us?</label>
      <div>
        <label className={styles.radioLabel}>
          <input type="radio" value="true" name={`RSVP${suffix}`} defaultChecked={user.rsvp} className={styles.radioButton} /> Yes
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" value="false" name={`RSVP${suffix}`} defaultChecked={user.rsvp == false} className={styles.radioButton} /> No
        </label>
      </div>

    </fieldset>
  );
};
