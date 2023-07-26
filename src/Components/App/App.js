import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getAllNews from '../../ApiCalls';
import NewsCard from '../NewsCard/NewsCard';
import Header from '../Header/Header';
import NewsDetail from '../NewsDetail/NewsDetail';

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllNews()
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const filterNews = () => {
    return news.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <BrowserRouter>
      <main className="App">
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<NewsCard articles={filterNews()} />} />
          <Route
            path="/article/:index"
            element={<NewsDetail articles={news} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
