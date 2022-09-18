import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../styles/Post.module.css'

function Post({ title, image, body, date }) {
  return (
    <post className={styles.post}>
      {image ? (
        <span>
          <img alt={image.description} src={`https:${image.file.url}`} />
          <div className="description">{image.description}</div>
        </span>
      )
        : (null)
      }
      <h2>{title}</h2>
      <h3>{new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</h3>
      <div className="body">{documentToReactComponents(body)}</div >
    </post>
  );
};

export default Post;
