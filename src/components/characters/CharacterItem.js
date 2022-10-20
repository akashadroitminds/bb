import React from 'react';
// import react router
import { Link } from 'react-router-dom'
const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img
            src={item.img}
            alt=''
            onError={(e: any) =>
              (e.target.src = 'https://via.placeholder.com/300')
            }
          />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
            <div className='learn-more-button-container'>
            <Link to={`/${item.char_id}`}>
              <p className='learn-more-button'>Learn More</p>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
