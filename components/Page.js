import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../styles/Page.module.css'

function Page({ content }) {
  return (
    <post className={styles.page}>
      <h1>{content.title}</h1>
      <div className="body">{documentToReactComponents(content.body)}</div>
    </post>
  );
};

export default Page;
