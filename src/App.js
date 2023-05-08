import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=> setPosts(data))
  },[])
  return (
    <div>
      <h2>Post: {posts.length}</h2>
      <div className='div-style'>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
      </div>
    </div>
  );
};
function Post(props) {
  return(
    <div className='style-container'>
        <h1>Title: {props.title}</h1>
        <p>Body: {props.body}</p>
      </div>
  )
}

export default App;
