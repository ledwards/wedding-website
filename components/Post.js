import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Post({ title, image, body, date }) {
  return (
    <div className="post">
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

      <style jsx>{`
        .post {
          margin: auto 15%;
        }
        
        .post {
          font-family: 'Playfair Display', serif;
        }
        
        @media only screen and (max-width: 768px) {
          .post {
            margin: auto 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default Post;
