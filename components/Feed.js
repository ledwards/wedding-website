import { forwardRef } from 'react';
import Post from '@components/Post';

function Feed({ posts }, ref) {
  return (
    <feed ref={ref}>
      {posts.map((p) => {
        return <Post key={p.id} title={p.title} image={p.heroImage ? p.heroImage.fields : null} body={p.body} date={p.date} />
      })}

      <style jsx>{`
      feed {
        margin: auto 15% 2em 15%;
      }
      
      @media only screen and (max-width: 768px) {
        feed {
          margin: auto 5%;
        }
      }
    `}</style>
    </feed>
  );
}

export default forwardRef(Feed);
