import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectArticles } from '../features/articles/articlesSlice';
import { Link, useParams, Routes, Route } from 'react-router-dom';
import Article from "./Article";


export default function Category () {
  const categories = useSelector(selectCategories)
  const articles = useSelector(selectArticles)

  const { name } = useParams()

  return (
    <div>
      <h1>Articles Related to {name}</h1>
      <ul>
        { 
          categories[name].map(articleSlug => {
            return (
              <li key={articleSlug} >
                <Link to={articleSlug}>
                  {articles[articleSlug].title}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Routes>
        <Route path=':title' element={<Article />} />      
      </Routes>
    </div>
  )
}
