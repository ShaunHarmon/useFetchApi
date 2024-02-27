import React, {useEffect} from 'react';
import './App.css';
import { useFetchApi } from './hooks/useFetchApi/useFetchApi';
import { CardList } from './components/CardList/CardList';
import { Post } from './components/Card/Card';

function App() {

  const {data, isLoading, error, abortController} = useFetchApi<Post[]>({url: 'https://jsonplaceholder.typicode.com/posts'})

  useEffect(()=>{
    error && console.warn(error)
    return ()=>{abortController.abort('component unmounted')}
  },[])

  return (
    <div className="App">
      {isLoading && <div>...loading</div>}
      <CardList list={data}/>
    </div>
  );
}

export default App;
