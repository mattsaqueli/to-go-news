import React from 'react';
import './NewsCard.css';
import { Link } from 'react-router-dom';

const NewsCard = ({ articles }) => {
  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div key={index} className="news-card">
          <Link to={`/article/${index}`}>
            <img src={article.urlToImage} alt={article.title} className="news-image" />
          </Link>
          <div className="news-details">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Published At: {new Date(article.publishedAt).toLocaleString()}</p>
            <Link to={`/article/${index}`} className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
