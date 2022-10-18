import React from 'react';
import spinner from '../../img/spinner.gif';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <img
      src={spinner}
      alt='Loading'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
