import { createBrowserRouter } from 'react-router'

import App from './App'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'articles/:articleID', element: <ArticlePage /> },
    ],
  },
])

export default router
