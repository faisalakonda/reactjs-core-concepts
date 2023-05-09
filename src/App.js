import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <Watch></Watch>
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
      <h1>Post: {posts.length}</h1>
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
// Increase and Decrease count program 
const Watch = () => {
  const [steps, setSteps] = useState(0)
  const increaseSteps = () => {
    const nextSteps = steps + 1;
    setSteps(nextSteps)
  }
  
  const decreaseSteps = () => {
    const reverseSteps = steps - 1;
    setSteps(reverseSteps)
  }
  useEffect( ()=> {
    console.log(steps)
  },[steps])
  return(
    <div>
      <h3>Count: {steps}</h3>
      <button onClick={increaseSteps}>Increase</button>
      <button onClick={decreaseSteps}>Decrease</button>
    </div>
  )
}
export default App;
