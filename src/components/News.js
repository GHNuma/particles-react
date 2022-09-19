import { Container, Typography } from "@mui/material";
import "./News.css";

const News = ({ news, title, error }) => {
  if (!news || news.length === 0) {
    return error ? <Typography variant='h2'>{error}</Typography> : null;
  }

  return (
    <Container>
      <Typography variant='h2'>{`${title}:`}</Typography>
      <ul className='news-list'>
        {news.map(
          ({
            objectID,
            url,
            title,
            points,
            num_comments,
            created_at,
            author,
          }) => (
            <li key={objectID} className='news'>
              <div className='description'>
                <a href={url} className='news-title'>
                  {title || "No title"}
                </a>
                <span className='text'>{`${points || 0} points`}</span>
                <span className='comments'>{`${
                  num_comments || 0
                } comments`}</span>
                <span className='date'>
                  {new Date(created_at).toLocaleDateString()}
                </span>
                <span className='author'>{author || "no author"}</span>
              </div>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default News;
