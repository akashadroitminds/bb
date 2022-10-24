import React, { useState } from 'react';

const Search = ({ itemsPerPage, setItemsPerPage, getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  const changeItemsPerPage = (value) => {
    if (value) {
      setItemsPerPage(parseInt(value));
    }
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />

      </form>
      <form className='filterForm'>
          <select
           value={itemsPerPage}
           onChange={(e) => changeItemsPerPage(e.target.value)}>
            <option value="2">
            2</option>
            <option value="3"
            >3</option>
            <option value="4">4</option>
            <option selected value="5">5</option>
          </select>
      </form>
    </section>
  );
};

export default Search;
