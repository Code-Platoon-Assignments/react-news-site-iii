import { useState } from 'react'
import { Outlet } from 'react-router'

import './App.css'

import NewsData from './data/news.json'
import AppNav from './components/AppNav/AppNav'


function App() {
 
  const[articles, setArticles] = useState(NewsData.map((article) => {
    return {
      objectID: article.objectID,
      title: article.title,
      created_at: article.created_at,
      url: article.url,
      author: article.author
    }})
    )

  const getArticleById = (articleId) => {
    return articles.find((article) => article.objectID === articleId)
  }
  
  return (
    <div className="App">
      <AppNav />
      <Outlet context={{ articles, getArticleById }} />
    </div>
  )
}

export default App
