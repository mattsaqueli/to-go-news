import './App.css';
import React from 'react'
import { useState, useEffect } from 'react';
import getAllNews from '../../ApiCalls'

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    getAllNews()
      .then((data) => {
        setNews(data.articles)
      })
      .catch((error) => {
        console.error('Error fetching news:', error)
      })
  }, [])

  console.log(news)

  return (
    <div className="App">
      <h1>To-Go News!</h1>
    </div>
  );
}

export default App;
