import { forwardRef } from 'react';
import Post from '@components/Post';
import styles from '../styles/Feed.module.css';

function Feed({ posts }, ref) {
  return (
    <feed id={styles.feed} ref={ref}>
      {posts.map((p) => {
        return <Post key={p.id} title={p.title} image={p.heroImage ? p.heroImage.fields : null} body={p.body} date={p.date} />
      })}
    </feed>
  );
}

export default forwardRef(Feed);
