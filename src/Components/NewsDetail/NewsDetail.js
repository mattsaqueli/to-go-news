import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = ({ articles }) => {
  const { index } = useParams();
  const article = articles[index];

  if (!article) {
    return <div>Loading...</div>; // You can replace this with a better loading UI
  }

  return (
    <div className="news-detail-container">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} className="news-detail-image" />
      <p>Published At: {new Date(article.publishedAt).toLocaleString()}</p>
      <p>{article.description}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetail;