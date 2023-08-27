import TextField from './TextField'
import styles from '../styles/SurveyResponse.module.css'

export default function SurveyResponse({ user, index }) {
  const suffix = `--${index}`;

  return (
    <fieldset className={styles.fieldset}>
      <h3>{user.name}</h3>

      {
        user.shuttle ? <>
          <label htmlFor={`Pickup Location${suffix}`} className={styles.question}>Shuttle Pickup Location:</label>
          <TextField name={`Pickup Location${suffix}`} disabled={true} className={styles.answer} defaultValue={user.pickup} placeholder='none' />
        </> : <>
          <label htmlFor={`Pickup Location${suffix}`} className={styles.question}>No Shuttle Reserved</label>
        </>
      }

      <br /><br />

      <label htmlFor={`Dietary Restrictions${suffix}`} className={styles.question}>Dietary restrictions:</label>
      <TextField name={`Dietary Restrictions${suffix}`} disabled={true} className={styles.answer} defaultValue={user.dietary} placeholder='none' />
    </fieldset >
  );
};
