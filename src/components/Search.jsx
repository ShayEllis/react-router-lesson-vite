import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Needed to change from useHistory to useNavigate because I am using a new version of react-router.

const Search = () => {
  const searchInputRef = useRef();
  const history = useNavigate(); // Needed to change from useHistory to useNavigate because I am using a new version of react-router.

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value
    }
    const queryString = new URLSearchParams(query).toString();

    history.push({ pathname: '/articles', search: queryString})
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;