import React from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { PostApi } from './api/Posts/PostAPi';

function App() {
  const {data, isLoading, error} = PostApi().GET()

 
  if(error){
    console.warn(error)
  }

  return (
    <div className="home-container">
      <div className='container'>
        <div className='grid-container'>
          {isLoading && <div>...loading</div>}
          <CardList list={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
