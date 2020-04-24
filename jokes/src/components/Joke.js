import React from 'react';

export const Joke = props => {
  const {joke } = props;
  return(
    <div className='joke-card'>
      <p>{joke}</p>
    </div>
  )
}