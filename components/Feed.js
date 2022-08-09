import { forwardRef } from 'react'
import Post from '@components/Post'

const FeedComponent = function Feed({ posts }, ref) {
  return (
    <>
      <div ref={ref} className="posts">
        {posts.map((p) => {
          return <Post key={p.id} title={p.title} image={p.heroImage ? p.heroImage.fields : null} body={p.body} date={p.date} />
        })}
      </div>
      <style jsx>{`
        footer {
          width: 100%;
          height: 4em;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .madewith {
          display: flex;
          font-family: 'Homemade Apple', serif;
        }

        .logo {
          height: 1em;
          margin: auto 0.55em;
          filter: grayscale(100%);
        }
      `}</style>
    </>
  )
}

export default forwardRef(FeedComponent)
