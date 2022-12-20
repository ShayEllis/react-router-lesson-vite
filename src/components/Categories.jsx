import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Routes, Route, Link, useLocation } from 'react-router-dom'; //useRouteMatch - Old code
import Category from './Category'

export default function Categories () {
  const categories = useSelector(selectCategories)
  //const { path, url } = useLocation() //useRouteMatch() - Old code

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        { 
          Object.keys(categories).map(category => {
            return (
              <li key={category}>
                <Link to={category}>{category}</Link>
              </li>
            )
          })
        }
      </ul>
        <Routes>
          <Route path={`:name/*`} element={<Category />} />
        </Routes>

{/*       <Route path={`/${path}/:name`} />
        <Category />                          //Old code
      </Route> */}

    </main>
  )
}
