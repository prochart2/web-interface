import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { URLSearchParams } from 'url';
import CategorySelector from './components/CategorySelector'


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'application/json;charset=utf-8';

const createNewCategory = (categoryName) => {
  const requestUrl = "http://127.0.0.1:8080/categories/new";
  let params = new URLSearchParams();
  params.append('name', categoryName)
  axios.post(requestUrl, params)
  .then((res) => {
    console.log(res.data);
  }, (err) => {
    console.error(err);
  });
}

function App() {
  const [categoryName, setCategoryName] = React.useState('');

  const onTextAreaChange = (event) => {
    setCategoryName(event.target.value);
  }

  const onSubmit = (event) => {
    createNewCategory(categoryName);
    setCategoryName('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <textarea value={categoryName} onChange={onTextAreaChange} />
        <button onClick={onSubmit}>Add Category</button>
        <CategorySelector />
      </header>
    </div>
  );
}

export default App;
