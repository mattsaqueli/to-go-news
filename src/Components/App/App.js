import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getAllNews from '../../ApiCalls';
import NewsCard from '../NewsCard/NewsCard';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getAllNews()
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  // console.log(news)
  return (
    <BrowserRouter>
      <main className="App">
        {/* <Header /> */}

        
        <Routes>
          <Route
            path="/"
            element={<NewsCard articles={news} />}
          />


        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
