import './App.css';
import React from 'react'
import { useState, useEffect } from 'react';
import getAllNews from '../../ApiCalls'
import { Route, Switch } from 'react-router-dom'
// import NewsCard from '../NewsCard'

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

  // console.log(news)

  return (
    <main className="App">
    {/* <Header /> */}
    <Switch>

    <Route 
      exact path ='/' 
      render={() => (
        <NewsCard 
          articles={news} 
        />
      )}
    />

    </Switch>

  </main>
  );
}

export default App;
