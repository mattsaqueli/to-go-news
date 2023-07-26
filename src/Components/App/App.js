import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getAllNews from '../../ApiCalls';
import NewsCard from '../NewsCard/NewsCard';
import Header from '../Header/Header';

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

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BrowserRouter>
      <main className='App'>
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path='/' element={<NewsCard articles={filteredNews} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
