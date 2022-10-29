import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import ReactPaginate from 'react-paginate';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostPage from './PostPage';

const App = () => {
  const [items, setItems] = useState([]);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchItems = async () => {
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    setItems(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [query]);

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

  function PaginatedItems({ itemsPerPage }) {
    console.log('items currently shown',itemsPerPage)
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
  
    useEffect(() => {
      console.log('Text',itemOffset,itemsPerPage);
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % items.length;
     console.log(
       `User requested page number ${event.selected}, which is offset ${newOffset}`
     );
     setItemOffset(newOffset);
   };

   return (
    <>
      <CharacterGrid isLoading={isLoading} items={currentItems} />
      <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      activeClassName="active"
        />
    </>
   );
  }

  return (
    <div className='container'>
       <Router>
      <Header />
<<<<<<< HEAD
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
=======
>>>>>>> filtering-and-pagination
      <Routes>
        <Route exact path='/' element={[<Search  itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} getQuery={(q) => setQuery(q)} />,<PaginatedItems itemsPerPage={itemsPerPage} />] }/>
      <Route path="/:id" element={<PostPage items={items} />} />
      </Routes>
    
       </Router>   

    </div>
  );
};

export default App;
