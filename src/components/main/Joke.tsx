import {useEffect, useState} from 'react';

export const Api = () => {

  const [joke, setJoke] = useState()
  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then(data => setJoke(data))
  }
useEffect (()=>{
  getJoke()
},[])

   return(
    <div className="text-center">
      <h2 className="pb-2 font-bold">Une blague ?</h2>
      {joke?.setup}
    </div>
   )
  };