import React from 'react';

export default function Avatar({ image, isNew }) {
  return (
    <div>
      <img className='photo' src={image} alt='Avatar' />
      {isNew && <span className='new'>New</span>}
    </div>
  );
}
