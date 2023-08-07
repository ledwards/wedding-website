import TextField from '@components/TextField'

import styles from '../styles/RsvpFields.module.css'

export default function SurveyFields({ user, index }) {
  const suffix = `--${index}`;

  return (
    <fieldset className={styles.fieldset}>
      <input name={`id${suffix}`} type="hidden" value={user.id} />
      <h3>{user.name}</h3>
      <input type="hidden" name={`Email${suffix}`} label="Email" defaultValue={user.email} />
      <br /><br />

      <label htmlFor={`Dietary Restrictions${suffix}`} className={styles.question}>Do you have any dietary restrictions?</label>
      <TextField name={`Dietary Restrictions${suffix}`} className={styles.answer} defaultValue={user.dietary} placeholder='none' />
      <br /><br />

      <label htmlFor={`Needs Shuttle${suffix}`} className={styles.question}>Will you be using our shuttles to the venue?</label>
      <div>
        <label className={styles.radioLabel}>
          <input type="radio" value="Yes" name={`Needs Shuttle${suffix}`} defaultChecked={user.shuttle == "Yes"} className={styles.radioButton} /> Yes
        </label>
        &nbsp;&nbsp;&nbsp;
        <label className={styles.radioLabel}>
          <input type="radio" value="No" name={`Needs Shuttle${suffix}`} defaultChecked={user.shuttle == "No"} className={styles.radioButton} /> No
        </label>
      </div>

      <br />

      <label htmlFor={`Pickup Locations${suffix}`} className={styles.radioButtonSet}>If you answered yes, where would you liked to be picked up?</label>
      <div>
        <label className={styles.radioLabel}>
          <input type="radio" value="The Westin Princeville" name={`Pickup Locations${suffix}`} defaultChecked={user.pickup == "The Westin Princeville"} className={styles.radioButton} /> The Westin Princeville
        </label>
        <br />
        <label className={styles.radioLabel}>
          <input type="radio" value="Hanalei Bay Resort" name={`Pickup Locations${suffix}`} defaultChecked={user.pickup == "Hanalei Bay Resort"} className={styles.radioButton} /> Hanalei Bay Resort
        </label>
        <br />
        <label className={styles.radioLabel}>
          <input type="radio" value="1 Hotel" name={`Pickup Locations${suffix}`} defaultChecked={user.pickup == "1 Hotel"} className={styles.radioButton} /> 1 Hotel
        </label>
      </div>

    </fieldset >
  );
};
