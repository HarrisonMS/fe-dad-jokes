import React, { useState, useEffect }  from 'react';
import { Joke } from './Joke';

import axiosWithAuth from '../utils/axiosWithAuth';

export const JokesList = props => {
  const [ jokes, setJokes ] = useState([]);
  console.log('jokes in state',jokes)
 
  useEffect(() => {
    axiosWithAuth()
    .get('/api/jokes')
    .then((res) => {
      setJokes(...jokes, res.data)
      console.log('jokes i hope',res.data)
    })
  },[])
  return (
    <>
    <div className='jokes-list'>
   {jokes.map(joke => <Joke key={joke.id} joke={joke.joke}/>)}
    </div>
    </>
  )
}