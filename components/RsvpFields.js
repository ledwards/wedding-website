import styles from '../styles/RsvpFields.module.css'

export default function RsvpFields({ user, index }) {
  const suffix = `--${index}`;

  return (
    <fieldset className={styles.fieldset}>
      <input name={`id${suffix}`} type="hidden" value={user.id} />

      <label hidden htmlFor={`Name${suffix}`}>Name</label>
      <input name={`Name${suffix}`} type="text" placeholder="Name" className={styles.nameEmail} defaultValue={user.name} spellCheck={false} />

      <label hidden htmlFor={`Email${suffix}`}>Name</label>
      <input name={`Email${suffix}`} type="text" placeholder="Email" className={styles.nameEmail} defaultValue={user.email} spellCheck={false} />

      <label hidden htmlFor={`Address${suffix}`}>Name</label>
      <textarea name={`Address${suffix}`} type="text" placeholder="Address" defaultValue={user.address} spellCheck={false} rows="4" />

      <label htmlFor={`RSVP${suffix}`}>Will you be joining us?</label>
      <input name={`RSVP${suffix}`} type="checkbox" defaultChecked={user.rsvp} />
    </fieldset>);
};
