import React, {useEffect} from 'react';
import './App.css';
import { useFetchApi } from './hooks/useFetchApi/useFetchApi';
import { CardList } from './components/CardList/CardList';
import { Post } from './components/Card/Card';

function App() {

  const {data, isLoading, error, abortController} = useFetchApi<Post[]>({url: 'https://jsonplaceholder.typicode.com/posts'})

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
