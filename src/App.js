import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import Pagination from './components/Pagination';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
        items={currentPosts}
      />
    </div>
  );
};

export default App;
